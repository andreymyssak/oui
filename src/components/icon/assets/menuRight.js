/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import * as React from 'react';
const OuiIconMenuRight = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M14.986 7.382a.501.501 0 0 1 .013.152c.014.4-.133.806-.439 1.112l-2.12 2.122a.5.5 0 1 1-.708-.708L13.792 8H1.5a.5.5 0 0 1 0-1h12.121l-1.889-1.89a.5.5 0 0 1 .707-.706l2.121 2.12c.241.242.383.544.426.858ZM1.5 3h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm0 8h7a.5.5 0 1 1 0 1h-7a.5.5 0 1 1 0-1Z" />
  </svg>
);
export const icon = OuiIconMenuRight;
