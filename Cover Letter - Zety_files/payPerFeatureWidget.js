
function loadScript(src, callback) {
    var s, r = false, t;
    s = document.createElement('script');
    s.type = "text/javascript";
    s.src = src;
    s.async = false;
    s.onload = s.onreadystatechange = function () {
        if (!r && (!this.readyState || this.readyState == 'complete' || this.readyState == 'loaded')) {
            r = true;
            callback && callback();
        }
    };
    document.getElementsByTagName("head")[0].appendChild(s);
}

var PPFWidget = {
    retryWaitTimeInMS: 100,
    maxRetriesForWidgetLoadCheck: 20,
    checkAndOpen: function (payperFeatureRequest, successCallBack, errorCallback) {
        var retriesDone = 0;
        var ppdWidgetInterval = setInterval(function () {
            try {
                retriesDone++;
                if (retriesDone > this.maxRetriesForWidgetLoadCheck) {
                    clearInterval(ppdWidgetInterval);
                    console.error('PPF Widget not initialized after timeout');
                    return;
                }
                if (PPFWidgetRef && PPFWidgetRef.current && PPFWidgetRef.current.checkAndOpen) {
                    PPFWidgetRef.current.checkAndOpen(payperFeatureRequest, successCallBack, errorCallback);
                    clearInterval(ppdWidgetInterval);
                }
            }
            catch (err) {

            }
        }, this.retryWaitTimeInMS);
    },
    showResumeGuranteeSection: function () {
        var retriesDone = 0;
        var ppdWidgetInterval = setInterval(function () {
            try {
                retriesDone++;
                if (retriesDone > this.maxRetriesForWidgetLoadCheck) {
                    clearInterval(ppdWidgetInterval);
                    console.error('Resume Guarantee Widget not initialized after timeout');
                    return;
                }
                if (PPFWidgetRef && PPFWidgetRef.current && PPFWidgetRef.current.showResumeGuranteeSection) {
                    PPFWidgetRef.current.showResumeGuranteeSection();
                    clearInterval(ppdWidgetInterval);
                }
            }
            catch (err) {

            }
        }, this.retryWaitTimeInMS);
    }
}

function getWidgetContainer() {
    var widgetContainer = null;
    if (window.ppdwidgetcontainer) {
        widgetContainer = window.ppdwidgetcontainer;
    }
    return widgetContainer;
}


function render() {
    var maxRetriesForJquery = 50;
    var retriesAttempted = 0;
    var widgetContainer = getWidgetContainer();
    if (typeof (jQuery) != "undefined") {
        ecom.default.payPerFeatureWidget.new({}).render(widgetContainer);
        return;
    }
    var jQueryInterval = setInterval(function () {
        if (maxRetriesForJquery < retriesAttempted) {
            clearInterval(jQueryInterval);
            console.error('PPD widget - Max retries attempted for jQuery');
        }
        if (typeof (jQuery) != "undefined") {
            let container = null
            if (window.ppdWidgetContainer) {
                container = window.ppdWidgetContainer;
            }
            ecom.default.payPerFeatureWidget.new({}).render(widgetContainer);
            clearInterval(jQueryInterval);
        }
        else {
            retriesAttempted++;
        }
    }, 200);
}
loadScript('/payment/build/vendor.bundle.js?v=1.0.0.254');
loadScript('/payment/build/payPerFeatureWidget.bundle.js?v=1.0.0.254', render);