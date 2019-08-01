var ls;
(function (ls) {
    var AIWeiXin = (function (_super) {
        __extends(AIWeiXin, _super);
        function AIWeiXin() {
            _super.call(this);
            if (AIWeiXin._instance != null) {
                throw new Error("AISystem 为单例！！！");
            }
            this.name = "Weixin";
        }
        var d = __define,c=AIWeiXin,p=c.prototype;
        d(AIWeiXin, "instance"
            ,function () {
                if (this._instance == null)
                    this._instance = new AIWeiXin();
                return this._instance;
            }
        );
        p.initialize = function () {
            this.prevUrl = window.location.href;
            var searchIndex = this.prevUrl.lastIndexOf("/");
            this.prevUrl = this.prevUrl.slice(0, searchIndex + 1);
            this.weixinSDK = new WeixinSDK();
            this.weixinSDK.debug = this.weixinDebug;
            this.weixinSDK.signUrl = this.weixinSignUrl;
            this.weixinSDK.initialize();
            this.setShareTimeline(this.title, this.link, this.imgUrl);
            this.setShareAppMessage(this.title, this.desc, this.link, this.imgUrl);
            this.setShareQQ(this.title, this.desc, this.link, this.imgUrl);
            this.setShareWeiBoMessage(this.title, this.desc, this.link, this.imgUrl);
            this.setShareQZone(this.title, this.desc, this.link, this.imgUrl);
            var self = this;
            this.weixinSDK.onTimelineTrigger = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinTimelineTrigger));
            };
            this.weixinSDK.onTimelineCancel = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinTimelineCancel));
            };
            this.weixinSDK.onTimelineSuccess = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinTimelineSuccess));
            };
            this.weixinSDK.onTimelineFail = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinTimelineFail));
            };
            this.weixinSDK.onAppMessageTrigger = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareAppMessageTrigger));
            };
            this.weixinSDK.onAppMessageCancel = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareAppMessageCancel));
            };
            this.weixinSDK.onAppMessageSuccess = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareAppMessageSuccess));
            };
            this.weixinSDK.onAppMessageFail = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareAppMessageFail));
            };
            this.weixinSDK.onQQTrigger = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareQQTrigger));
            };
            this.weixinSDK.onQQCancel = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareQQCancel));
            };
            this.weixinSDK.onQQSuccess = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareQQSuccess));
            };
            this.weixinSDK.onQQFail = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareQQFail));
            };
            this.weixinSDK.onWeiBoTrigger = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareTXWeiBoTrigger));
            };
            this.weixinSDK.onWeiBoCancel = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareTXWeiBoCancel));
            };
            this.weixinSDK.onWeiBoSuccess = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareTXWeiBoSuccess));
            };
            this.weixinSDK.onWeiBoFail = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareTXWeiBoFail));
            };
            this.weixinSDK.onQZoneTrigger = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareQZoneTrigger));
            };
            this.weixinSDK.onQZoneCancel = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareQZoneCancel));
            };
            this.weixinSDK.onQZoneSuccess = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareQZoneSuccess));
            };
            this.weixinSDK.onQZoneFail = function () {
                self.dispatchEvent(new ls.TriggerEvent(ls.TriggerEvent.TRIGGER, self.weixinShareQZoneFail));
            };
        };
        p.weixinTimelineTrigger = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinTimelineCancel = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinTimelineSuccess = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinTimelineFail = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinShareAppMessageTrigger = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinShareAppMessageCancel = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinShareAppMessageSuccess = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinShareAppMessageFail = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinShareQQTrigger = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinShareQQCancel = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinShareQQSuccess = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinShareQQFail = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinShareTXWeiBoTrigger = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinShareTXWeiBoCancel = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinShareTXWeiBoSuccess = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinShareTXWeiBoFail = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinShareQZoneTrigger = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinShareQZoneCancel = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinShareQZoneSuccess = function ($event) {
            return { instances: [this], status: true };
        };
        p.weixinShareQZoneFail = function ($event) {
            return { instances: [this], status: true };
        };
        d(p, "imagePrevUrl"
            ,function () {
                var _imagePrevUrl = this.prevUrl.split('#')[0];
                _imagePrevUrl = _imagePrevUrl.split('?')[0];
                var searchIndex = _imagePrevUrl.lastIndexOf("/");
                _imagePrevUrl = _imagePrevUrl.slice(0, searchIndex + 1);
                return _imagePrevUrl;
            }
        );
        p.setShareTimeline = function ($title, $url, $imgUrl) {
            if (this.weixinSDK.bodyMenuShareTimeline() == null) {
                ls.assert(true, "this.weixinSDK.bodyMenuShareTimeline为空！");
                return;
            }
            this.weixinSDK.bodyMenuShareTimeline().title = ls.eval_e($title);
            this.weixinSDK.bodyMenuShareTimeline().link = ls.eval_e($url);
            this.weixinSDK.bodyMenuShareTimeline().imgUrl = this.imagePrevUrl + $imgUrl;
            if (this.weixinDebug)
                alert("朋友圈图片分享的地址：" + this.imagePrevUrl + $imgUrl);
        };
        p.setShareAppMessage = function ($title, $desc, $url, $imgUrl, $type, $dataUrl) {
            if ($type === void 0) { $type = ""; }
            if ($dataUrl === void 0) { $dataUrl = ""; }
            if (this.weixinSDK.bodyMenuShareAppMessage() == null) {
                ls.assert(true, "this.weixinSDK.bodyMenuShareAppMessage为空！");
                return;
            }
            this.weixinSDK.bodyMenuShareAppMessage().title = ls.eval_e($title);
            this.weixinSDK.bodyMenuShareAppMessage().desc = ls.eval_e($desc);
            this.weixinSDK.bodyMenuShareAppMessage().link = ls.eval_e($url);
            this.weixinSDK.bodyMenuShareAppMessage().imgUrl = this.imagePrevUrl + $imgUrl;
            if (this.weixinDebug)
                alert("朋友图片分享的地址：" + this.imagePrevUrl + $imgUrl);
        };
        p.setShareQQ = function ($title, $desc, $url, $imgUrl, $type, $dataUrl) {
            if ($type === void 0) { $type = ""; }
            if ($dataUrl === void 0) { $dataUrl = ""; }
            if (this.weixinSDK.bodyMenuShareQQ() == null) {
                ls.assert(true, "this.weixinSDK.bodyMenuShareQQ为空！");
                return;
            }
            this.weixinSDK.bodyMenuShareQQ().title = ls.eval_e($title);
            this.weixinSDK.bodyMenuShareQQ().desc = ls.eval_e($desc);
            this.weixinSDK.bodyMenuShareQQ().link = ls.eval_e($url);
            this.weixinSDK.bodyMenuShareQQ().imgUrl = this.imagePrevUrl + $imgUrl;
            if (this.weixinDebug)
                alert("QQ图片分享的地址：" + this.imagePrevUrl + $imgUrl);
        };
        p.setShareWeiBoMessage = function ($title, $desc, $url, $imgUrl) {
            if (this.weixinSDK.bodyMenuShareWeibo() == null) {
                ls.assert(true, "this.weixinSDK.bodyMenuShareWeibo为空！");
                return;
            }
            this.weixinSDK.bodyMenuShareWeibo().title = ls.eval_e($title);
            this.weixinSDK.bodyMenuShareWeibo().desc = ls.eval_e($desc);
            this.weixinSDK.bodyMenuShareWeibo().link = ls.eval_e($url);
            this.weixinSDK.bodyMenuShareWeibo().imgUrl = this.imagePrevUrl + $imgUrl;
            if (this.weixinDebug)
                alert("微博图片分享的地址：" + this.imagePrevUrl + $imgUrl);
        };
        p.setShareQZone = function ($title, $desc, $url, $imgUrl) {
            if (this.weixinSDK.bodyMenuShareQZone() == null) {
                ls.assert(true, "this.weixinSDK.bodyMenuShareQZone为空！");
                return;
            }
            this.weixinSDK.bodyMenuShareQZone().title = ls.eval_e($title);
            this.weixinSDK.bodyMenuShareQZone().desc = ls.eval_e($desc);
            this.weixinSDK.bodyMenuShareQZone().link = $url;
            this.weixinSDK.bodyMenuShareQZone().imgUrl = this.imagePrevUrl + $imgUrl;
            if (this.weixinDebug)
                alert("QQ空间图片分享的地址：" + this.imagePrevUrl + $imgUrl);
        };
        return AIWeiXin;
    }(ls.AIDisplayObject));
    ls.AIWeiXin = AIWeiXin;
    egret.registerClass(AIWeiXin,'ls.AIWeiXin');
    var WeiXinTimelineTriggerEvent = (function (_super) {
        __extends(WeiXinTimelineTriggerEvent, _super);
        function WeiXinTimelineTriggerEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinTimelineTriggerEvent,p=c.prototype;
        return WeiXinTimelineTriggerEvent;
    }(ls.BaseEvent));
    ls.WeiXinTimelineTriggerEvent = WeiXinTimelineTriggerEvent;
    egret.registerClass(WeiXinTimelineTriggerEvent,'ls.WeiXinTimelineTriggerEvent');
    var WeiXinTimelineCancelEvent = (function (_super) {
        __extends(WeiXinTimelineCancelEvent, _super);
        function WeiXinTimelineCancelEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinTimelineCancelEvent,p=c.prototype;
        return WeiXinTimelineCancelEvent;
    }(ls.BaseEvent));
    ls.WeiXinTimelineCancelEvent = WeiXinTimelineCancelEvent;
    egret.registerClass(WeiXinTimelineCancelEvent,'ls.WeiXinTimelineCancelEvent');
    var WeiXinTimelineSuccessEvent = (function (_super) {
        __extends(WeiXinTimelineSuccessEvent, _super);
        function WeiXinTimelineSuccessEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinTimelineSuccessEvent,p=c.prototype;
        return WeiXinTimelineSuccessEvent;
    }(ls.BaseEvent));
    ls.WeiXinTimelineSuccessEvent = WeiXinTimelineSuccessEvent;
    egret.registerClass(WeiXinTimelineSuccessEvent,'ls.WeiXinTimelineSuccessEvent');
    var WeiXinTimelineFailEvent = (function (_super) {
        __extends(WeiXinTimelineFailEvent, _super);
        function WeiXinTimelineFailEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinTimelineFailEvent,p=c.prototype;
        return WeiXinTimelineFailEvent;
    }(ls.BaseEvent));
    ls.WeiXinTimelineFailEvent = WeiXinTimelineFailEvent;
    egret.registerClass(WeiXinTimelineFailEvent,'ls.WeiXinTimelineFailEvent');
    var WeiXinShareAppMessageTriggerEvent = (function (_super) {
        __extends(WeiXinShareAppMessageTriggerEvent, _super);
        function WeiXinShareAppMessageTriggerEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinShareAppMessageTriggerEvent,p=c.prototype;
        return WeiXinShareAppMessageTriggerEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareAppMessageTriggerEvent = WeiXinShareAppMessageTriggerEvent;
    egret.registerClass(WeiXinShareAppMessageTriggerEvent,'ls.WeiXinShareAppMessageTriggerEvent');
    var WeiXinShareAppMessageCancelEvent = (function (_super) {
        __extends(WeiXinShareAppMessageCancelEvent, _super);
        function WeiXinShareAppMessageCancelEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinShareAppMessageCancelEvent,p=c.prototype;
        return WeiXinShareAppMessageCancelEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareAppMessageCancelEvent = WeiXinShareAppMessageCancelEvent;
    egret.registerClass(WeiXinShareAppMessageCancelEvent,'ls.WeiXinShareAppMessageCancelEvent');
    var WeiXinShareAppMessageSuccessEvent = (function (_super) {
        __extends(WeiXinShareAppMessageSuccessEvent, _super);
        function WeiXinShareAppMessageSuccessEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinShareAppMessageSuccessEvent,p=c.prototype;
        return WeiXinShareAppMessageSuccessEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareAppMessageSuccessEvent = WeiXinShareAppMessageSuccessEvent;
    egret.registerClass(WeiXinShareAppMessageSuccessEvent,'ls.WeiXinShareAppMessageSuccessEvent');
    var WeiXinShareAppMessageFailEvent = (function (_super) {
        __extends(WeiXinShareAppMessageFailEvent, _super);
        function WeiXinShareAppMessageFailEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinShareAppMessageFailEvent,p=c.prototype;
        return WeiXinShareAppMessageFailEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareAppMessageFailEvent = WeiXinShareAppMessageFailEvent;
    egret.registerClass(WeiXinShareAppMessageFailEvent,'ls.WeiXinShareAppMessageFailEvent');
    var WeiXinShareQQTriggerEvent = (function (_super) {
        __extends(WeiXinShareQQTriggerEvent, _super);
        function WeiXinShareQQTriggerEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinShareQQTriggerEvent,p=c.prototype;
        return WeiXinShareQQTriggerEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareQQTriggerEvent = WeiXinShareQQTriggerEvent;
    egret.registerClass(WeiXinShareQQTriggerEvent,'ls.WeiXinShareQQTriggerEvent');
    var WeiXinShareQQCancelEvent = (function (_super) {
        __extends(WeiXinShareQQCancelEvent, _super);
        function WeiXinShareQQCancelEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinShareQQCancelEvent,p=c.prototype;
        return WeiXinShareQQCancelEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareQQCancelEvent = WeiXinShareQQCancelEvent;
    egret.registerClass(WeiXinShareQQCancelEvent,'ls.WeiXinShareQQCancelEvent');
    var WeiXinShareQQSuccessEvent = (function (_super) {
        __extends(WeiXinShareQQSuccessEvent, _super);
        function WeiXinShareQQSuccessEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinShareQQSuccessEvent,p=c.prototype;
        return WeiXinShareQQSuccessEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareQQSuccessEvent = WeiXinShareQQSuccessEvent;
    egret.registerClass(WeiXinShareQQSuccessEvent,'ls.WeiXinShareQQSuccessEvent');
    var WeiXinShareQQFailEvent = (function (_super) {
        __extends(WeiXinShareQQFailEvent, _super);
        function WeiXinShareQQFailEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinShareQQFailEvent,p=c.prototype;
        return WeiXinShareQQFailEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareQQFailEvent = WeiXinShareQQFailEvent;
    egret.registerClass(WeiXinShareQQFailEvent,'ls.WeiXinShareQQFailEvent');
    var WeiXinShareTXWeiBoTriggerEvent = (function (_super) {
        __extends(WeiXinShareTXWeiBoTriggerEvent, _super);
        function WeiXinShareTXWeiBoTriggerEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinShareTXWeiBoTriggerEvent,p=c.prototype;
        return WeiXinShareTXWeiBoTriggerEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareTXWeiBoTriggerEvent = WeiXinShareTXWeiBoTriggerEvent;
    egret.registerClass(WeiXinShareTXWeiBoTriggerEvent,'ls.WeiXinShareTXWeiBoTriggerEvent');
    var WeiXinShareTXWeiBoCancelEvent = (function (_super) {
        __extends(WeiXinShareTXWeiBoCancelEvent, _super);
        function WeiXinShareTXWeiBoCancelEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinShareTXWeiBoCancelEvent,p=c.prototype;
        return WeiXinShareTXWeiBoCancelEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareTXWeiBoCancelEvent = WeiXinShareTXWeiBoCancelEvent;
    egret.registerClass(WeiXinShareTXWeiBoCancelEvent,'ls.WeiXinShareTXWeiBoCancelEvent');
    var WeiXinShareTXWeiBoSuccessEvent = (function (_super) {
        __extends(WeiXinShareTXWeiBoSuccessEvent, _super);
        function WeiXinShareTXWeiBoSuccessEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinShareTXWeiBoSuccessEvent,p=c.prototype;
        return WeiXinShareTXWeiBoSuccessEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareTXWeiBoSuccessEvent = WeiXinShareTXWeiBoSuccessEvent;
    egret.registerClass(WeiXinShareTXWeiBoSuccessEvent,'ls.WeiXinShareTXWeiBoSuccessEvent');
    var WeiXinShareTXWeiBoFailEvent = (function (_super) {
        __extends(WeiXinShareTXWeiBoFailEvent, _super);
        function WeiXinShareTXWeiBoFailEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinShareTXWeiBoFailEvent,p=c.prototype;
        return WeiXinShareTXWeiBoFailEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareTXWeiBoFailEvent = WeiXinShareTXWeiBoFailEvent;
    egret.registerClass(WeiXinShareTXWeiBoFailEvent,'ls.WeiXinShareTXWeiBoFailEvent');
    var WeiXinShareQZoneTriggerEvent = (function (_super) {
        __extends(WeiXinShareQZoneTriggerEvent, _super);
        function WeiXinShareQZoneTriggerEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinShareQZoneTriggerEvent,p=c.prototype;
        return WeiXinShareQZoneTriggerEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareQZoneTriggerEvent = WeiXinShareQZoneTriggerEvent;
    egret.registerClass(WeiXinShareQZoneTriggerEvent,'ls.WeiXinShareQZoneTriggerEvent');
    var WeiXinShareQZoneCancelEvent = (function (_super) {
        __extends(WeiXinShareQZoneCancelEvent, _super);
        function WeiXinShareQZoneCancelEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinShareQZoneCancelEvent,p=c.prototype;
        return WeiXinShareQZoneCancelEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareQZoneCancelEvent = WeiXinShareQZoneCancelEvent;
    egret.registerClass(WeiXinShareQZoneCancelEvent,'ls.WeiXinShareQZoneCancelEvent');
    var WeiXinShareQZoneSuccessEvent = (function (_super) {
        __extends(WeiXinShareQZoneSuccessEvent, _super);
        function WeiXinShareQZoneSuccessEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinShareQZoneSuccessEvent,p=c.prototype;
        return WeiXinShareQZoneSuccessEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareQZoneSuccessEvent = WeiXinShareQZoneSuccessEvent;
    egret.registerClass(WeiXinShareQZoneSuccessEvent,'ls.WeiXinShareQZoneSuccessEvent');
    var WeiXinShareQZoneFailEvent = (function (_super) {
        __extends(WeiXinShareQZoneFailEvent, _super);
        function WeiXinShareQZoneFailEvent() {
            _super.call(this);
        }
        var d = __define,c=WeiXinShareQZoneFailEvent,p=c.prototype;
        return WeiXinShareQZoneFailEvent;
    }(ls.BaseEvent));
    ls.WeiXinShareQZoneFailEvent = WeiXinShareQZoneFailEvent;
    egret.registerClass(WeiXinShareQZoneFailEvent,'ls.WeiXinShareQZoneFailEvent');
    var WeixinSDK = (function () {
        function WeixinSDK() {
            this.debug = true;
            this._bodyMenuShareTimeline = new BodyMenuShareTimeline();
            this._bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
            this._bodyMenuShareQQ = new BodyMenuShareQQ();
            this._bodyMenuShareWeibo = new BodyMenuShareWeibo();
            this._bodyMenuShareQZone = new BodyMenuShareQZone();
        }
        var d = __define,c=WeixinSDK,p=c.prototype;
        p.bodyMenuShareTimeline = function () {
            return this._bodyMenuShareTimeline;
        };
        p.bodyMenuShareAppMessage = function () {
            return this._bodyMenuShareAppMessage;
        };
        p.bodyMenuShareQQ = function () {
            return this._bodyMenuShareQQ;
        };
        p.bodyMenuShareWeibo = function () {
            return this._bodyMenuShareWeibo;
        };
        p.bodyMenuShareQZone = function () {
            return this._bodyMenuShareQZone;
        };
        p.initialize = function () {
            var _this = this;
            this.self = this;
            if (this.signUrl == null || this.signUrl == "") {
                return;
            }
            if (window.location && window.location.href && window.location.href.split) {
                var curUrl = window.location.href.split('#')[0];
                curUrl = curUrl.slice(0, curUrl.length - 1);
                var fullSignUrl = this.signUrl + "?url=" + encodeURIComponent(location.href.split("#")[0]);
                var urlloader = new egret.URLLoader();
                var req = new egret.URLRequest(fullSignUrl);
                urlloader.load(req);
                req.method = egret.URLRequestMethod.GET;
                urlloader.addEventListener(egret.Event.COMPLETE, function (e) {
                    _this.signPackage = JSON.parse(e.target.data);
                    _this.getWeiXinConfig();
                    _this.registerWeiXinShareTimeline();
                    _this.registerWeiXinShareAppMessage();
                    _this.registerWeiXinShareQQ();
                    _this.registerWeiXinShareWeiBo();
                    _this.registerWeiXinShareQZone();
                }, this);
            }
        };
        p.getWeiXinConfig = function () {
            var bodyConfig = new BodyConfig();
            bodyConfig.debug = this.debug;
            bodyConfig.appId = this.signPackage.appId;
            bodyConfig.timestamp = this.signPackage.timestamp;
            bodyConfig.nonceStr = this.signPackage.nonceStr;
            bodyConfig.signature = this.signPackage.signature;
            bodyConfig.jsApiList = [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'translateVoice',
                'startRecord',
                'stopRecord',
                'playVoice',
                'pauseVoice',
                'stopVoice',
                'uploadVoice',
                'downloadVoice',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard'
            ];
            wx.config(bodyConfig);
        };
        p.registerWeiXinShareTimeline = function () {
            var _this = this;
            this.bodyMenuShareTimeline().trigger = function () {
                if (_this.debug) {
                    alert('用户点击分享到朋友圈');
                }
                if (_this.onTimelineTrigger != null)
                    _this.onTimelineTrigger();
            };
            this.bodyMenuShareTimeline().success = function () {
                if (_this.debug)
                    alert('已分享');
                if (_this.onTimelineSuccess != null)
                    _this.onTimelineSuccess();
            };
            this.bodyMenuShareTimeline().cancel = function () {
                if (_this.debug)
                    alert('已取消');
                if (_this.onTimelineCancel != null)
                    _this.onTimelineCancel();
            };
            this.bodyMenuShareTimeline().fail = function (res) {
                if (_this.debug)
                    alert(JSON.stringify(res));
                if (_this.onTimelineFail != null)
                    _this.onTimelineFail();
            };
            wx.onMenuShareTimeline(this.bodyMenuShareTimeline());
        };
        p.registerWeiXinShareAppMessage = function () {
            var _this = this;
            this.bodyMenuShareAppMessage().trigger = function () {
                if (_this.debug)
                    alert('用户点击发送给朋友');
                if (_this.onAppMessageTrigger != null)
                    _this.onAppMessageTrigger();
            };
            this.bodyMenuShareAppMessage().success = function () {
                if (_this.debug)
                    alert('已分享');
                if (_this.onAppMessageSuccess != null)
                    _this.onAppMessageSuccess();
            };
            this.bodyMenuShareAppMessage().cancel = function () {
                if (_this.debug)
                    alert('已取消');
                if (_this.onAppMessageCancel != null)
                    _this.onAppMessageCancel();
            };
            this.bodyMenuShareAppMessage().fail = function (res) {
                if (_this.debug)
                    alert(JSON.stringify(res));
                if (_this.onAppMessageFail != null)
                    _this.onAppMessageFail();
            };
            wx.onMenuShareAppMessage(this.bodyMenuShareAppMessage());
        };
        p.registerWeiXinShareQQ = function () {
            var _this = this;
            this.bodyMenuShareQQ().trigger = function () {
                if (_this.debug)
                    alert('用户点击分享到QQ');
                if (_this.onQQTrigger != null)
                    _this.onQQTrigger();
            };
            this.bodyMenuShareQQ().complete = function (res) {
                if (_this.debug)
                    alert(JSON.stringify(res));
            };
            this.bodyMenuShareQQ().success = function () {
                if (_this.debug)
                    alert('已分享');
                if (_this.onQQSuccess != null)
                    _this.onQQSuccess();
            };
            this.bodyMenuShareQQ().cancel = function () {
                if (_this.debug)
                    alert('已取消');
                if (_this.onQQCancel != null)
                    _this.onQQCancel();
            };
            this.bodyMenuShareQQ().fail = function (res) {
                if (_this.debug)
                    alert(JSON.stringify(res));
                if (_this.onQQFail != null)
                    _this.onQQFail();
            };
            wx.onMenuShareQQ(this.bodyMenuShareQQ());
        };
        p.registerWeiXinShareWeiBo = function () {
            var _this = this;
            this.bodyMenuShareWeibo().trigger = function () {
                if (_this.debug)
                    alert('用户点击分享到微博');
                if (_this.onWeiBoTrigger != null)
                    _this.onWeiBoTrigger();
            };
            this.bodyMenuShareWeibo().complete = function (res) {
                if (_this.debug)
                    alert(JSON.stringify(res));
            };
            this.bodyMenuShareWeibo().success = function () {
                if (_this.debug)
                    alert('已分享');
                if (_this.onWeiBoSuccess != null)
                    _this.onWeiBoSuccess();
            };
            this.bodyMenuShareWeibo().cancel = function () {
                if (_this.debug)
                    alert('已取消');
                if (_this.onWeiBoCancel != null)
                    _this.onWeiBoCancel();
            };
            this.bodyMenuShareWeibo().fail = function (res) {
                if (_this.debug)
                    alert(JSON.stringify(res));
                if (_this.onWeiBoFail != null)
                    _this.onWeiBoFail();
            };
            wx.onMenuShareWeibo(this.bodyMenuShareWeibo());
        };
        p.registerWeiXinShareQZone = function () {
            var _this = this;
            this.bodyMenuShareQZone().trigger = function () {
                if (_this.debug)
                    alert('用户点击分享到微博');
                if (_this.onQZoneTrigger != null)
                    _this.onQZoneTrigger();
            };
            this.bodyMenuShareQZone().complete = function (res) {
                if (_this.debug)
                    alert(JSON.stringify(res));
            };
            this.bodyMenuShareQZone().success = function () {
                if (_this.debug)
                    alert('已分享');
                if (_this.onQZoneSuccess != null)
                    _this.onQZoneSuccess();
            };
            this.bodyMenuShareQZone().cancel = function () {
                if (_this.debug)
                    alert('已取消');
                if (_this.onQZoneCancel != null)
                    _this.onQZoneCancel();
            };
            this.bodyMenuShareQZone().fail = function (res) {
                if (_this.debug)
                    alert(JSON.stringify(res));
                if (_this.onQZoneFail != null)
                    _this.onQZoneFail();
            };
            wx.onMenuShareQZone(this.bodyMenuShareQZone());
        };
        return WeixinSDK;
    }());
    egret.registerClass(WeixinSDK,'WeixinSDK');
})(ls || (ls = {}));
