/* @flow */

import { memoize } from "@krakenjs/belter/src";

import type { ButtonProps } from "../ui/buttons/props";

import { getConnectComponent } from "./component";

type MerchantProps = {|
  buttonProps?: ButtonProps,
  metadata?: mixed,
|};

type ConnectComponent = (merchantProps: MerchantProps) => ConnectComponent;
// $FlowFixMe
export const Connect: (merchantProps: MerchantProps) => ConnectComponent =
  memoize(async (merchantProps: MerchantProps): ConnectComponent => {
    // $FlowFixMe
    return await getConnectComponent(merchantProps);
  });

export const Fastlane: (merchantProps: MerchantProps) => ConnectComponent =
  memoize(async (merchantProps: MerchantProps): ConnectComponent => {
    // $FlowFixMe
    return await getConnectComponent(merchantProps);
  });
