import type { TText } from "shared/types";

export function linkText(text: TText): TText {
  return text.split(" ").join("-");
}
