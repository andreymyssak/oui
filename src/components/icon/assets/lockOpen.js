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
const OuiIconLockOpen = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.143 5c.473 0 .857.448.857 1v9c0 .552-.384 1-.857 1H.857C.384 16 0 15.552 0 15V6c0-.552.384-1 .857-1H8v-.8C8 1.88 9.79 0 12 0s4 1.88 4 4.2V5h-1v-.64C15 2.504 13.657 1 12 1S9 2.504 9 4.36V5h2.143ZM1 15h10V6H1v9Zm5.998-3.706L7.5 12.5h-3l.502-1.206A1.644 1.644 0 0 1 4.5 10.1c0-.883.672-1.6 1.5-1.6s1.5.717 1.5 1.6c0 .475-.194.901-.502 1.194Z" />
  </svg>
);
export const icon = OuiIconLockOpen;
