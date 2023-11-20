import { ImageLoaderProps } from "next/image";

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${process.env.NEXT_PUBLIC_DOMAIN}${src}?w=${width}&q=${
    quality || 75
  }`;
};
export default imageLoader;
