/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { css, styled } from '@superset-ui/core';

export default styled.div`
  ${({ theme }) => css`
    table {
      width: 100%;
      min-width: auto;
      max-width: none;
      margin: 0;
    }

    th,
    td {
      min-width: 4.3em;
    }

    thead > tr > th {
      padding-right: 0;
      position: relative;
      background: ${theme.colors.grayscale.light5};
      text-align: left;
    }
    th svg {
      color: ${theme.colors.grayscale.light2};
      margin: ${theme.gridUnit / 2}px;
    }
    th.is-sorted svg {
      color: ${theme.colors.grayscale.base};
    }
    .table > tbody > tr:first-of-type > td,
    .table > tbody > tr:first-of-type > th {
      border-top: 0;
    }

    .table > tbody tr td {
      font-feature-settings: 'tnum' 1;
    }

    .dt-controls {
      padding-bottom: 0.65em;
    }
    .dt-metric {
      text-align: right;
    }
    .dt-totals {
      font-weight: ${theme.typography.weights.bold};
    }
    .dt-is-null {
      color: ${theme.colors.grayscale.light1};
    }
    td.dt-is-filter {
      cursor: pointer;
    }
    td.dt-is-filter:hover {
      background-color: ${theme.colors.secondary.light4};
    }
    td.dt-is-active-filter,
    td.dt-is-active-filter:hover {
      background-color: ${theme.colors.secondary.light3};
    }

    .dt-global-filter {
      float: right;
    }

    .dt-truncate-cell {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .dt-truncate-cell:hover {
      overflow: visible;
      white-space: normal;
      height: auto;
    }

    .dt-pagination {
      text-align: right;
      /* use padding instead of margin so clientHeight can capture it */
      padding: ${theme.gridUnit * 2}px ${theme.gridUnit * 2}px;
      overflow: visible;
      min-height: 48px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .dt-pagination .pagination {
      margin: 0;
      display: flex;
      align-items: center;
      gap: ${theme.gridUnit}px;
    }
    .dt-pagination .pagination > li {
      margin: 0;
      list-style: none;
    }
    .dt-pagination .pagination > li > a,
    .dt-pagination .pagination > li > span {
      padding: ${theme.gridUnit}px ${theme.gridUnit * 2}px;
      min-width: 28px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: ${theme.borderRadius}px;
      background-color: transparent;
      color: ${theme.colors.grayscale.dark1};
      cursor: pointer;
      transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
      text-decoration: none;
      font-size: ${theme.typography.sizes.s}px;
    }
    .dt-pagination .pagination > li > a:hover,
    .dt-pagination .pagination > li > span:hover {
      color: ${theme.colors.primary.dark1};
      background-color: ${theme.colors.grayscale.light5};
    }
    .dt-pagination .pagination > li.active > a,
    .dt-pagination .pagination > li.active > a:hover {
      background-color: ${theme.colors.primary.base};
      border: 1px solid ${theme.colors.primary.base};
      color: ${theme.colors.grayscale.light5};
      cursor: default;
    }
    .dt-pagination .pagination > li.disabled > a,
    .dt-pagination .pagination > li.disabled > a:hover {
      cursor: not-allowed;
      opacity: 1;
      color: ${theme.colors.grayscale.dark1};
      background-color: transparent;
    }
    .dt-pagination .pagination > li.dt-pagination-ellipsis > span {
      border: none;
      background: transparent;
      cursor: default;
    }
    .dt-pagination .pagination > li.dt-pagination-ellipsis > span:hover {
      border: none;
      background: transparent;
      color: ${theme.colors.grayscale.base};
    }

    .pagination > li > span.dt-pagination-ellipsis:focus,
    .pagination > li > span.dt-pagination-ellipsis:hover {
      background: ${theme.colors.grayscale.light5};
    }

    .dt-no-results {
      text-align: center;
      padding: 1em 0.6em;
    }

    .right-border-only {
      border-right: 2px solid ${theme.colors.grayscale.light2};
    }
    table .right-border-only:last-child {
      border-right: none;
    }
  `}
`;
