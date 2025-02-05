type ModConditionalElement = {
  element: ModElement[];
  if: ValueOp;
};

export type ModManifest = {
  /** A unique string identifying this Miniapp */
  slug: string;
  /** A human readable name for the Mini-app */
  name: string;
  /** A (temporary) github username to define as the owner */
  custodyGithubUsername: string;
  /** An ethereum address or ENS address to define as the owner */
  custodyAddress: string;
  /** A valid url pointing to an image file, it should be a square */
  logo: string;
  version: string;
  creationEntrypoints?: ModElement[];
  contentEntrypoints?: ModConditionalElement[];
  elements?: Record<string, ModElement[]>;
};

export type ModEvent =
  | ModAction
  | string
  | ModElement[]
  | ConditionalFlow<ModAction | string | ModElement[]>;

type BaseAction = {
  ref?: string;
  onsuccess?: ModEvent;
  onerror?: ModEvent;
  onloading?: ModEvent;
};

export type Op = {
  AND?: Op | Op[];
  OR?: Op[];
  NOT?: Op | Op[];
  equals?: string;
  oneOf?: string[];
  notOneOf?: string[];
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  regex?: string;
};

type ValueOp = {
  value: string;
  match: Op;
};

export type ConditionalFlow<T> = {
  if: ValueOp | ValueOp[];
  then: T | ConditionalFlow<T>;
  else?: T | ConditionalFlow<T>;
};

export type JsonType =
  | { type: "string"; value: string }
  | { type: "number"; value: number }
  | { type: "boolean"; value: boolean }
  | { type: "array"; value: JsonType[] }
  | { type: "object"; value: Record<string, JsonType> };

type FormDataType =
  | { type: "blobRef"; value: string }
  | { type: "string"; value: string };

type HTTPBody =
  | {
      json: JsonType;
    }
  | {
      formData: Record<string, FormDataType>;
    };

type HTTPAction = BaseAction & { url: string } & (
    | {
        type: "GET";
      }
    | {
        type: "POST";
        body?: HTTPBody;
      }
    | {
        type: "PUT";
        body?: HTTPBody;
      }
    | {
        type: "PATCH";
        body?: HTTPBody;
      }
    | {
        type: "DELETE";
      }
  );

type OpenFileAction = BaseAction & {
  type: "OPENFILE";
  accept: string[];
  maxFiles: number;
  oncancel?: ModEvent;
};

type AddEmbedAction = BaseAction & {
  type: "ADDEMBED";
  url: string;
  name: string;
  mimeType: string;
};

type OpenLinkAction = BaseAction & {
  type: "OPENLINK";
  url: string;
};

type SetInputAction = BaseAction & {
  type: "SETINPUT";
  value: string;
};

type ExitAction = {
  type: "EXIT";
};

export type ModAction =
  | HTTPAction
  | OpenFileAction
  | AddEmbedAction
  | SetInputAction
  | OpenLinkAction
  | ExitAction;

type ElementOrConditionalFlow = ModElement | ConditionalFlow<ModElement>;

export type ModElement =
  | {
      type: "text";
      label: string;
    }
  | {
      type: "image";
      imageSrc: string;
    }
  | {
      type: "link";
      label: string;
      onclick?: ModEvent;
      variant?: "link" | "primary" | "secondary" | "destructive";
      url: string;
    }
  | {
      type: "button";
      label: string;
      variant?: "primary" | "secondary" | "destructive";
      onclick: ModEvent;
    }
  | {
      type: "circular-progress";
    }
  | {
      type: "horizontal-layout";
      elements?: string | ElementOrConditionalFlow[];
      onload?: ModEvent;
    }
  | {
      type: "vertical-layout";
      elements?: string | ElementOrConditionalFlow[];
      onload?: ModEvent;
    }
  | {
      ref?: string;
      type: "input";
      placeholder?: string;
      clearable?: boolean;
      onchange?: ModEvent;
      onsubmit?: ModEvent;
    }
  | {
      type: "video";
      videoSrc: string;
    }
  | {
      ref?: string;
      type: "tabs";
      values: string[];
      names: string[];
      onload?: ModEvent;
      onchange?: ModEvent;
    }
  | ({
      ref?: string;
      type: "image-grid-list";
      onload?: ModEvent;
      onpick?: ModEvent;
    } & (
      | { loading: boolean; imagesListRef?: never }
      | { loading?: never; imagesListRef: string }
    ))
  | {
      type: "dialog";
      elements?: string | ElementOrConditionalFlow[];
      onclose?: ModEvent;
    }
  | {
      type: "alert";
      title: string;
      description: string;
      variant: "success" | "error";
    }
  | {
      type: "avatar";
      src: string;
    }
  | ({
      type: "card";
      elements?: string | ElementOrConditionalFlow[];
      onclick?: ModEvent;
    } & (
      | {
          imageSrc: string;
          aspectRatio?: number;
          topLeftBadge?: string;
          topRightBadge?: string;
          bottomLeftBadge?: string;
          bottomRightBadge?: string;
        }
      | {
          imageSrc?: never;
          aspectRatio?: never;
          topLeftBadge?: never;
          topRightBadge?: never;
          bottomLeftBadge?: never;
          bottomRightBadge?: never;
        }
    ));
