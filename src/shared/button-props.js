/* @flow */

import type { ButtonProps } from "../ui/buttons/props";

// Store button props that can be reused across components
let storedButtonProps: ?ButtonProps = null;

/**
 * Store the button props from the Buttons component
 * for use by other components (like Connect/Fastlane)
 */
export function setButtonProps(props: ButtonProps): void {
  storedButtonProps = props;
}

/**
 * Retrieve the stored button props
 * Returns null if no props have been set
 */
export function getButtonProps(): ?ButtonProps {
  return storedButtonProps;
}

/**
 * Clear the stored button props
 * Should be called during component cleanup to prevent memory leaks
 */
export function clearButtonProps(): void {
  storedButtonProps = null;
}

