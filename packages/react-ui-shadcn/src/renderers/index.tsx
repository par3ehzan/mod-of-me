import { Renderers } from "@packages/react";
import { TextRenderer } from "./text";
import { ButtonRenderer } from "./button";
import { CircularProgressRenderer } from "./circular-progress";
import { HorizontalLayoutRenderer } from "./horizontal-layout";
import { VerticalLayoutRenderer } from "./vertical-layout";
import { TabsRenderer } from "./tabs";
import { InputRenderer } from "./input";
import { ImageGridListRenderer } from "./image-grid-list";
import { DialogRenderer } from "./dialog";
import { AlertRenderer } from "./alert";
import { VideoRenderer } from "./video";
import { CardRenderer } from "./card";
import { AvatarRenderer } from "./avatar";
import { ImageRenderer } from "./image";

export const renderers: Renderers = {
  Text: TextRenderer,
  Image: ImageRenderer,
  Card: CardRenderer,
  Avatar: AvatarRenderer,
  Video: VideoRenderer,
  Button: ButtonRenderer,
  CircularProgress: CircularProgressRenderer,
  HorizontalLayout: HorizontalLayoutRenderer,
  VerticalLayout: VerticalLayoutRenderer,
  Tabs: TabsRenderer,
  Input: InputRenderer,
  ImageGridList: ImageGridListRenderer,
  Dialog: DialogRenderer,
  Alert: AlertRenderer,
};
