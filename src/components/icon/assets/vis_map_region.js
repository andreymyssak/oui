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
const OuiIconVisMapRegion = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.5 2.309v8.69a.499.499 0 0 1-.032.176L9.5 12.691V3.809l-3-1.5Zm-1-.04L2 3.825v8.906l3.527-1.568a.5.5 0 0 1-.027-.164V2.27Zm.274-1.216a.498.498 0 0 1 .471.01l3.768 1.884 4.284-1.904A.5.5 0 0 1 15 1.5v10a.5.5 0 0 1-.297.457l-4.5 2a.5.5 0 0 1-.427-.01l-3.789-1.894-4.283 1.904a.5.5 0 0 1-.703-.457v-10a.5.5 0 0 1 .297-.457l4.476-1.99ZM10.5 3.825v8.906l3.5-1.556V2.27l-3.5 1.556Z" />
  </svg>
);
export const icon = OuiIconVisMapRegion;
