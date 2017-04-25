/*
  Copyright 2017 Esri

  Licensed under the Apache License, Version 2.0 (the "License");

  you may not use this file except in compliance with the License.

  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software

  distributed under the License is distributed on an "AS IS" BASIS,

  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

  See the License for the specific language governing permissions and

  limitations under the License.​
*/
define(["require", "exports", "dojo/i18n!application/nls/resources.js"], function (require, exports, i18n) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /// <amd-dependency path="dojo/i18n!application/nls/resources.js" name="i18n" />
    var CSS = {
        loading: "configurable-application--loading"
    };
    var Application = (function () {
        function Application() {
            //--------------------------------------------------------------------------
            //
            //  Lifecycle
            //
            //--------------------------------------------------------------------------
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            //----------------------------------
            //  ApplicationBase
            //----------------------------------
            this.base = null;
            //--------------------------------------------------------------------------
            //
            //  Private Methods
            //
            //--------------------------------------------------------------------------
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        Application.prototype.init = function (base) {
            console.log(base);
            document.body.classList.remove(CSS.loading);
        };
        return Application;
    }());
    exports.default = Application;
});
//# sourceMappingURL=Application.js.map