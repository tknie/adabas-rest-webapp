/*
* Copyright © 2020 Software AG, Darmstadt, Germany and/or its licensors
*
* SPDX-License-Identifier: Apache-2.0
*
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*       http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
*
*/

import Vue from 'vue';


export function Url() {
   // console.log('Mode:' + process.env.NODE_ENV);
   if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:8130'; // GO
      // return 'http://localhost:8091'; // Java
   }
   return '.';
}

export function Version(): string {
   if (process.env.NODE_ENV === 'development') {
      return 'dev';
   }
   return 'v1.0.1';
}

export const config = {
   Url,
   Version,
};
