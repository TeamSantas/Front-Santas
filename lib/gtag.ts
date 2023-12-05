import getConfig from "next/config";

declare global {
  interface Window {
    gtag: (content: string, id: string, params: object) => void;
    AnalyticsWebInterface: any;
    webkit: any;
  }
}

const { env } = getConfig().publicRuntimeConfig;
const ga4MeasurementID = process.env.NEXT_PUBLIC_GA_ID;

const config = (params) => {
  if (window.AnalyticsWebInterface) {
    // Call Android interface
    const { user_id: userId } = params;

    window.AnalyticsWebInterface.setUserId(userId);
    return;
  }

  if (
    window.webkit &&
    window.webkit.messageHandlers &&
    window.webkit.messageHandlers.firebase
  ) {
    // Call iOS interface
    const message = {
      command: "setUserId",
      ...params,
    };

    window.webkit.messageHandlers.firebase.postMessage(message);
    return;
  }

  // No Android or iOS interface found
  if (!window.gtag) {
    return;
  }

  if (env === "production") {
    window.gtag("config", ga4MeasurementID, {
      ...params,
      send_page_view: false,
    });
  } else {
    window.gtag("config", ga4MeasurementID, {
      ...params,
      send_page_view: false,
      debug_mode: true,
    });
  }
};

const event = (name, params) => {
  if (!name) {
    return;
  }

  if (window.AnalyticsWebInterface) {
    // Call Android interface
    params.page_title = window.document.title;
    params.page_referrer = window.document.referrer;
    params.page_location = window.location.href;

    const modifiedParams = {
      ...params,
      ...params.ecommerce,
    };
    delete modifiedParams.ecommerce;

    window.AnalyticsWebInterface.logEvent(name, JSON.stringify(modifiedParams));
    return;
  }

  if (
    window.webkit &&
    window.webkit.messageHandlers &&
    window.webkit.messageHandlers.firebase
  ) {
    // Call iOS interface
    params.page_title = window.document.title;
    params.page_referrer = window.document.referrer;
    params.page_location = window.location.href;

    const modifiedParams = {
      ...params,
      ...params.ecommerce,
    };
    delete modifiedParams.ecommerce;

    const message = {
      command: "logEvent",
      name: name,
      parameters: modifiedParams,
    };

    window.webkit.messageHandlers.firebase.postMessage(message);
    return;
  }

  // No Android or iOS interface found
  if (!window.gtag) {
    return;
  }

  if (env === "production") {
    window.gtag("event", name, params);
  } else {
    window.gtag("event", name, { ...params, debug_mode: true });
  }
};

export const measureUser = (params: { user_id: number }) => config(params);

// page_view 자동 전송이 아닌 메뉴얼로 이벤트 전송
export const measurePageView = (params: {
  page_title?: string;
  page_location?: string;
  page_referrer?: string;
}) => event("page_view", params);
