"use client";

import Image, { type ImageProps } from "next/image";
import { type ReactElement, useState } from "react";
import { Loader } from "../loader";

export const LoadingImage = (props: ImageProps): ReactElement => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { alt, ...others } = props;

  const loadImage = (): void => setIsLoaded(true);

  if (!isLoaded) return <Loader />;

  return <Image
    alt={alt}
    {...others} onLoad={loadImage} />;

};