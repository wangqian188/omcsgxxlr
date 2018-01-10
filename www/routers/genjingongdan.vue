<style scoped lang="less">
    @import "../resources/css/reset.css";
    @import "../resources/css/base.less";
    .tsbq{width:100% !important}
    .active{color: rgb(53,134,242) !important;border:1px solid rgb(53,134,242) !important;}
    .bajt{ background: url("../resources/images/fangyfx/genjinlist/gong_dan/1.png") no-repeat;
        background-size: 100% 100%;}
    .duijren{line-height: 0.7rem;float: left;border: 1px solid white;font-size: 0.32rem;color: white;}
    .xx{color: #007aff !important;}
    .xxbg{background-color: white;}
    .qmzt{color: rgb(150,150,150);}
    .ys_tit{width: 2rem !important;}
    .w224{width: 2rem !important;}
    .anniu{display: block;height: .7rem;text-align: center;line-height: .7rem;color: #fff;border-radius: .08rem;background-color: rgb(53,134,242);}
    .gdtmy::-webkit-scrollbar {
        display: none;
        width: 100%;
        height:4rem;
        background: #fff;
    }
    .zitys{color: #333;}
</style>
<template>
    <div class="all_elements" style="width: 100%;height: 100%;">
        <div style="position: absolute;top: 0rem;width: 100%;">
            <div class="analy_item bajt" style="padding: 0;height: 2.8rem; box-shadow: 0 0 5px #000;z-index:2;width: 100%;">
                <div class="analy_content" style="margin-left: 0.2rem;padding-top: 0.5rem;">
                    <span v-text="lpname" style="color: white;font-weight: 500;font-size: 0.36rem;"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span v-text="zdhname" style="color: white;font-weight: 500;font-size: 0.36rem;"></span>
                </div>
                <div style="height: 1rem;margin-top: 0.5rem;display: flex;justify-content: center;align-items: center;text-align: center;">
                    <div class="duijren xxbg" style="width: 2.2rem;border-bottom-left-radius: 5px;border-top-left-radius: 5px;" @click="djrxx(1,$event)"><a href="javascript:;" class="xx" style="color: white;">对接人信息</a></div>
                    <div class="duijren" style="width: 2.4rem;" @click="djrxx(2,$event)"><a href="javascript:;" style="color: white;">签约谈判条件</a></div>
                    <div class="duijren" style="width: 2.6rem;border-bottom-right-radius: 5px;border-top-right-radius: 5px;" @click="djrxx(3,$event)"><a href="javascript:;" style="color: white;">产权及注册情况</a></div>
                </div>
            </div>
        </div>
        <div style="width: 100%;position: absolute;top:2.8rem;left: 0;right: 0;bottom:0;overflow: auto;" class="zhongjian">
            <div class="build_top">
                <ul class="ys_item_ul mb60">
                    <div  style="background-color: rgb(240,239,245);">
                        <div class="" style="position: relative;top: 0.1rem;left: 6rem;border-radius:50%;box-shadow: 0 0 5px rgb(53,134,242);-webkit-box-shadow: 0 0 5px #000;width: 1rem;height:1rem;clear: both;padding: 0px;" @click="bianji">
                            <img src="../resources/images/fangyfx/genjinlist/gong_dan/3.png" style="width: 100%;">
                        </div>
                        <div v-if="genjingondanif == 1" style="border-top-left-radius:5px;border-top-right-radius:5px;margin-top: -0.4rem;margin-left: 0.2rem;margin-right: 0.2rem; box-shadow: 0 0 5px #000;">
                            <div style="background-color: rgb(238,238,238);line-height: 0.8rem;padding-left: 0.2rem;">
                                <div style="font-size: 0.3rem;">对接人信息</div>
                            </div>
                            <li class="clearfix" style="clear: both;" v-if="xgif">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;">对接人：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;">对接人：</span>
                                <div class="ys_item_con fl" v-if="duijie" @click="duijiere($event)" v-text="duijierid" rel="1"></div>
                                <div class="ys_item_con fl" v-else @click="duijiere($event)" v-text="duijierid" rel="2"></div>
                                <!--<div v-if="duijierenif">
                                    <div class="ys_item_con fl" v-if="duijie" @click="duijiere($event)" rel="1"><a href="javascript:;">业主</a></div>
                                    <div class="ys_item_con fl" v-else @click="duijiere($event)" rel="2"><a href="javascript:;">代理人</a></div>
                                </div>
                                <div v-if="duijierenif">
                                    <div class="ys_item_con fl" v-if="duijie" rel="1"><a href="javascript:;">业主</a></div>
                                    <div class="ys_item_con fl" v-else rel="2"><a href="javascript:;">代理人</a></div>
                                </div>-->
                            </li>
                            <li class="clearfix" style="clear: both;" v-else>
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;">对接人：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;">对接人：</span>
                                <div class="ys_item_con fl" v-if="duijie" v-text="duijierid" rel="1"></div>
                                <div class="ys_item_con fl" v-else v-text="duijierid" rel="2"></div>
                                <!--<div v-if="duijierenif">
                                    <div class="ys_item_con fl" v-if="duijie" @click="duijiere($event)" rel="1"><a href="javascript:;">业主</a></div>
                                    <div class="ys_item_con fl" v-else @click="duijiere($event)" rel="2"><a href="javascript:;">代理人</a></div>
                                </div>
                                <div v-if="duijierenif">
                                    <div class="ys_item_con fl" v-if="duijie" rel="1"><a href="javascript:;">业主</a></div>
                                    <div class="ys_item_con fl" v-else rel="2"><a href="javascript:;">代理人</a></div>
                                </div>-->
                            </li>
                            <li class="clearfix pr">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;">合作意向：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;">合作意向：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <input type="text" value="" v-model="hzyx" readonly onfocus="this.blur()" placeholder="请选择" @click="openQuality6">
                                    <i class="right_arrow" @click="openQuality6">&gt;</i>
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input type="text" value="" v-model="hzyx" readonly onfocus="this.blur()" placeholder="请选择">
                                </div>
                            </li>
                            <li class="clearfix pr">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;"><i style="color: red;position: relative;top: 0.05rem;">*</i>姓名：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;"><i style="color: red;position: relative;top: 0.05rem;">*</i>姓名：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <input type="text" value="" v-model="djrid" readonly onfocus="this.blur()" placeholder="请选择对接人" @click="openQuality">
                                    <i class="right_arrow" @click="openQuality">&gt;</i>
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input type="text" value="" v-model="djrid" readonly onfocus="this.blur()" placeholder="请选择对接人">
                                </div>
                            </li>
                            <li class="clearfix">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;"><i style="color: red;position: relative;top: 0.05rem;">*</i>电话：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;"><i style="color: red;position: relative;top: 0.05rem;">*</i>电话：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <input class="anzhif" type="text" value="" v-model="phone" placeholder="请输入">
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input class="anzhif" type="text" value="" readonly onfocus="this.blur()" v-model="phone" placeholder="请输入">
                                </div>
                            </li>
                            <!--<li class="clearfix pr">
                                <span class="ys_tit">对接人性别：</span>
                                <div class="ys_item_con fl">
                                    <input type="text" value="" v-model="xb" readonly placeholder="请选择对接人性别" @click="openQuality2">
                                    <i class="right_arrow" @click="openQuality2">&gt;</i>
                                </div>
                            </li>-->
                            <li class="clearfix">
                                <span v-if="xgif" class="ys_tit w224 qmz zityst" style="width: 2rem !important;">性别：</span>
                                <span v-else class="ys_tit w224 qmzt" style="width: 2rem !important;">性别：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <label class="mr20"><input type="radio" v-model="xb" value="1" name="xb">男</label>
                                    <label><input type="radio" value="0"  v-model="xb" name="xb">女</label>
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input type="text" value="" readonly onfocus="this.blur()" v-model="xbsee" placeholder="请选择">
                                </div>
                            </li>
                            <li class="clearfix pr">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;">年龄：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;">年龄：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <input class="anzhif" type="text" value="" v-model="year" placeholder="请输入">
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input class="anzhif" type="text" value="" readonly onfocus="this.blur()" v-model="year" placeholder="请输入">
                                </div>
                            </li>
                            <li class="clearfix">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;">从事行业：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;">从事行业：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <input class="anzhif" type="text" value="" v-model="cshy" placeholder="请输入">
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input class="anzhif" type="text" value="" readonly onfocus="this.blur()" v-model="cshy" placeholder="请输入">
                                </div>
                            </li>

                            <!--<li class="clearfix">
                                <span class="ys_tit">性格标签：</span>
                                <div class="ys_item_con fl"><a href="javascript:;">{{xgbq_t}}</a></div>
                            </li>
                            <li class="clearfix bg_gray">
                                <div class="xgbq ys_item_con fl" @click="selectTag($event)">
                                    <span v-for="xg in xgbq_all" class="ys_tag" :class="{'active': xgbq.indexOf(xg.id) > -1}" :value="xg.id" >{{xg.topic}}</span>
                                </div>
                            </li>
            -->
                            <li class="clearfix">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;">性格标签：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;">性格标签：</span>
                                <div class="ys_item_con fl" style="width: 69%;"><a href="javascript:;">
                                    <span v-if="xgss == ''" style="color: #999999;"></span>
                                    <span v-else-if="xgif" v-for="(xgt,index) in xgss" class="ys_tag" style="position: relative;color: rgb(53,134,242);border:1px solid rgb(53,134,242);background-color: rgb(255,255,255);">
                                    {{xgt}}
                                    <a href="javascript:;"><i @click="deletebqi($event,index)" style="position: absolute;top:-0.2rem;right:-0.1rem;line-height:0.3rem;padding-left:0.04rem;display: inline-block;width:0.3rem;height:0.3rem;background-color:rgb(200,200,200);color: #666666;font-size: 0.36rem;border-radius: 50%;transform: rotate(45deg);">
                                        +
                                    </i></a>
                                </span>
                                    <!--<p style="position: relative;top:-0.6rem;left:0.5rem;background-color:#999999;border:1px solid #000;box-sizing:border-box;border-radius: 50%;width:0.3rem;height:0.3rem;color: black;font-size: 0.36rem;"><i style="display: block;width: 0.28rem;height: 0.28rem;line-height: 0.28rem;transform:rotate(45deg);text-align: center;position: absolute;top: 50%;margin-top: -0.17rem;margin: 0 auto;">+</i></p></span>-->
                                    <span v-else v-for="xgt in xgss" class="ys_tag" style="color: rgb(53,134,242);border:1px solid rgb(53,134,242);background-color: rgb(255,255,255);">{{xgt}}</span>
                                    <a href="javascript:;" v-if="xgif">
                                    <span class="ys_tag" style="color: rgb(53,134,242);background-color: rgb(255,255,255);" @click="addtianj">
                                        <img src="../resources/images/fangyfx/genjinlist/gong_dan/add.png" style="width: 0.5rem;" v-if="addxians">
                                        <img src="../resources/images/fangyfx/genjinlist/gong_dan/delet.png" style="width: 0.5rem;" v-else>
                                    </span>
                                    </a>
                                    <a href="javascript:;" v-else>
                                    <span class="ys_tag" style="color: rgb(53,134,242);background-color: rgb(255,255,255);">
                                        <img src="../resources/images/fangyfx/genjinlist/gong_dan/add.png" style="width: 0.5rem;" v-if="addxians">
                                    </span>
                                    </a>
                                </a></div>
                            </li>
                            <li class="clearfix bg_gray gdtmy" v-show="xgbqif" style="height: 4rem;overflow: scroll;">
                                <div class="xgbq ys_item_con fl"  style="width: 100%;">
                                    <span v-for="(xg,index) in xgbq_all" class="ys_tag" @mousedown="selectTag($event,xg.id,index,xg.topic)"  @mouseup="selectTagup($event,xg.id,index,xg.topic)" :value="xg.id" style="background-color: rgb(255,255,255);border:1px solid rgb(255,255,255);">{{xg.topic}}</span>
                                </div>
                            </li>
                            <!-- <li class="clearfix pr" v-if=kprqqx>
                                 <span class="ys_tit">开盘日期：</span>
                                 <div class="ys_item_con fl">
                                     <input type="text" value=""
                                            readonly
                                            placeholder="请选择日期"
                                            v-model="kprq"
                                            @click="openPicker()">
                                     <i class="calendar_icon" @click="openPicker()"></i>
                                 </div>
                             </li>
                             <li class="clearfix pr" v-else>
                                 <span class="ys_tit zyzd">开盘日期：</span>
                                 <div class="ys_item_con fl">
                                     <input type="text" value=""
                                            readonly
                                            onfocus="this.blur()"
                                            placeholder="请选择日期"
                                            v-model="kprq"
                                     >
                                     <i class="calendar_icon"></i>
                                 </div>
                             </li>-->
                            <li class="clearfix">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;">居住地：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;">居住地：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <input class="anzhif" type="text" value="" v-model="xaddress" placeholder="请输入">
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input class="anzhif" type="text" value="" readonly onfocus="this.blur()" v-model="xaddress" placeholder="请输入">
                                </div>
                            </li>
                        </div>
                        <div v-else-if="genjingondanif == 2" style="border-top-left-radius:5px;border-top-right-radius:5px;margin-top: -0.4rem;margin-left: 0.2rem;margin-right: 0.2rem; box-shadow: 0 0 5px #000;">
                            <div style="background-color: rgb(238,238,238);line-height: 0.8rem;padding-left: 0.2rem;">
                                <div style="font-size: 0.3rem;">签约谈判条件</div>
                            </div>
                            <li class="clearfix pr">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;">委托方式：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;">委托方式：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <input type="text" value="" v-model="wtsort" readonly onfocus="this.blur()" placeholder="请选择委托方式" @click="openQuality3">
                                    <i class="right_arrow" @click="openQuality3">&gt;</i>
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input type="text" value="" v-model="wtsort" readonly onfocus="this.blur()" placeholder="请选择委托方式">
                                </div>
                            </li>
                            <li class="clearfix">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;">免租期：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;">免租期：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <input class="anzhif" type="text" value="" v-model="mzq" placeholder="请输入">
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input class="anzhif" type="text" value="" readonly onfocus="this.blur()" v-model="mzq" placeholder="请输入">
                                </div>
                            </li>
                            <li class="clearfix">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;">业主接受价格：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;">业主接受价格：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <input class="anzhif" type="text" value="" v-model="Price" placeholder="请输入">
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input class="anzhif" type="text" readonly onfocus="this.blur()" value="" v-model="Price" placeholder="请输入">
                                </div>
                            </li>
                            <li class="clearfix">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;">签约年限：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;">签约年限：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <input class="anzhif" type="text" value="" v-model="qynx" placeholder="请输入">
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input class="anzhif" type="text" value="" readonly onfocus="this.blur()" v-model="qynx" placeholder="请输入">
                                </div>
                            </li>
                            <li class="clearfix">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;">递增方式：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;">递增方式：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <input class="anzhif" type="text" value="" v-model="dzsort" placeholder="请输入">
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input class="anzhif" type="text" value="" readonly onfocus="this.blur()" v-model="dzsort" placeholder="请输入">
                                </div>
                            </li>
                            <li class="clearfix">
                                <span v-if="xgif" class="ys_tit w224 qmzt zitys" style="width: 2rem !important;">接受转租形式：</span>
                                <span v-else class="ys_tit w224 qmzt" style="width: 2rem !important;">接受转租形式：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <label class="mr20"><input type="radio" value="1" v-model="zzsort" name="zzsort">是</label>
                                    <label><input type="radio" value="2" v-model="zzsort" name="zzsort">否</label>
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input type="text" value="" readonly onfocus="this.blur()" v-model="zzsortsee" placeholder="请选择">
                                </div>
                                <!-- radio中的name不能用company-->
                                <!--<div class="ys_item_con fl">
                                    <label class="mr20"><input type="radio" value="1" v-model="zzsort" name="company">是</label>
                                    <label><input type="radio" value="0" v-model="zzsort" name="company">否</label>
                                </div>-->
                            </li>
                            <li class="clearfix">
                                <span v-if="xgif" class="ys_tit w224 qmzt zitys" style="width: 2rem !important;">配合工商注册：</span>
                                <span v-else class="ys_tit w224 qmzt" style="width: 2rem !important;">配合工商注册：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="gszc" name="gszc">是</label>
                                    <label @click="sfygsclass"><input type="radio" value="2" v-model="gszc" name="gszc">否</label>
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input type="text" value="" readonly onfocus="this.blur()" v-model="gszcsee" placeholder="请选择">
                                </div>
                            </li>
                            <li class="clearfix">
                                <span v-if="xgif" class="ys_tit w224 qmzt zitys" style="width: 2rem !important;">配合开具发票：</span>
                                <span v-else class="ys_tit w224 qmzt" style="width: 2rem !important;">配合开具发票：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <label class="mr20" @click="kpsjclass"><input type="radio" value="1" v-model="kjfp" name="kjfp">是</label>
                                    <label @click="kpsjclass"><input type="radio" value="2" v-model="kjfp" name="kjfp">否</label>
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input type="text" value="" readonly onfocus="this.blur()" v-model="kjfpsee" placeholder="请选择">
                                </div>
                            </li>
                            <li class="clearfix pr" v-show="kjfp == 1">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;">开票时间：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;">开票时间：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <input type="text" value=""
                                           readonly
                                           onfocus="this.blur()"
                                           placeholder="请选择开票时间"
                                           v-model="kpsj"
                                           @click="openPicker()">
                                    <i class="calendar_icon" @click="openPicker()"></i>
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input type="text" value=""
                                           readonly
                                           onfocus="this.blur()"
                                           placeholder="请选择开票时间"
                                           v-model="kpsj"
                                    >
                                </div>
                            </li>
                        </div>
                        <div v-else-if="genjingondanif == 3" style="border-top-left-radius:5px;border-top-right-radius:5px;margin-top: -0.4rem;margin-left: 0.2rem;margin-right: 0.2rem; box-shadow: 0 0 5px #000;">
                            <div style="background-color: rgb(238,238,238);line-height: 0.8rem;padding-left: 0.2rem;">
                                <div style="font-size: 0.3rem;">产权及注册情况</div>
                            </div>
                            <li class="clearfix pr">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;">产权归属：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;">产权归属：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <input type="text" value="" v-model="chqattach" readonly onfocus="this.blur()" placeholder="请选择产权归属" @click="openQuality4">
                                    <i class="right_arrow" @click="openQuality4">&gt;</i>
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input type="text" value="" v-model="chqattach" readonly onfocus="this.blur()" placeholder="请选择产权归属">
                                </div>
                            </li>
                            <li class="clearfix">
                                <span v-if="xgif" class="ys_tit w224 qmzt zitys" style="width: 2rem !important;">是否已做抵押：</span>
                                <span v-else class="ys_tit w224 qmzt" style="width: 2rem !important;">是否已做抵押：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="Sfdy" name="Sfdy">是</label>
                                    <label @click="sfygsclass"><input type="radio" value="2" v-model="Sfdy" name="Sfdy">否</label>
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input type="text" value="" readonly onfocus="this.blur()" v-model="Sfdysee" placeholder="请选择">
                                </div>
                            </li>
                            <li class="clearfix pr">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;">产权证类型：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;">产权证类型：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <input type="text" value="" v-model="chqsort" readonly onfocus="this.blur()" placeholder="请选择产权证类别" @click="openQuality5">
                                    <i class="right_arrow" @click="openQuality5">&gt;</i>
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input type="text" value="" v-model="chqsort" readonly onfocus="this.blur()" placeholder="请选择产权证类别">
                                </div>
                            </li>
                            <li class="clearfix">
                                <span v-if="xgif" class="ys_tit w224 qmzt zitys" style="width: 2rem !important;">产权证原件：</span>
                                <span v-else class="ys_tit w224 qmzt" style="width: 2rem !important;">产权证原件：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <label class="mr20" @click="sfygsclass"><input type="radio" value="1" v-model="sfyj" name="sfyj">是</label>
                                    <label @click="sfygsclass"><input type="radio" value="2" v-model="sfyj" name="sfyj">否</label>
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input type="text" value="" readonly onfocus="this.blur()" v-model="sfyjsee" placeholder="请选择">
                                </div>
                            </li>
                            <li class="clearfix">
                                <span v-if="xgif" class="ys_tit w224 qmzt zitys" style="width: 2rem !important;">有无公司注册：</span>
                                <span v-else class="ys_tit w224 qmzt" style="width: 2rem !important;">有无公司注册：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <label class="mr20" @click="gszc1sclass"><input type="radio" value="1" v-model="sfgszc" name="sfgszc">有</label>
                                    <label @click="gszc1sclass"><input type="radio" value="2" v-model="sfgszc" name="sfgszc">无</label>
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input type="text" value="" readonly onfocus="this.blur()" v-model="sfgszcsee" placeholder="请选择">
                                </div>
                            </li>
                            <!--<li class="clearfix">
                                <span class="ys_tit w224">迁出时间：</span>
                                &lt;!&ndash;<div class="ys_item_con fl">
                                    <input type="text" value="" v-model="qctime" placeholder="请输入">
                                </div>&ndash;&gt;
                                <div class="ys_item_con fl">
                                    <input type="text" value="" readonly placeholder="请选择迁出时间"  v-model.trim="qctime" @click="openPicker()">
                                    &lt;!&ndash;<i class="calendar_icon"  @click="openPicker()"></i>&ndash;&gt;
                                    <i class="right_arrow" style="position: absolute;top:0;right: 0;" @click="openPicker">&gt;</i>
                                </div>
                                &lt;!&ndash;<div class="ys_item_con fl">
                                    <input type="text" value="" v-model="chqattach" readonly placeholder="请选择产权归属" @click="openQuality4">
                                    <i class="right_arrow" @click="openQuality4">&gt;</i>
                                </div>&ndash;&gt;
                            </li>-->
                            <li class="clearfix pr" v-show="sfgszc == 1">
                                <span v-if="xgif" class="ys_tit qmzt zitys" style="width: 2rem !important;">迁出时间：</span>
                                <span v-else class="ys_tit qmzt" style="width: 2rem !important;">迁出时间：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <input type="text" value=""
                                           readonly
                                           onfocus="this.blur()"
                                           placeholder="请选择迁出时间"
                                           v-model="qctime"
                                           @click="openPicker2()">
                                    <i class="calendar_icon" @click="openPicker2()"></i>
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input type="text" value=""
                                           readonly
                                           onfocus="this.blur()"
                                           placeholder="请选择迁出时间"
                                           v-model="qctime"
                                    >
                                </div>
                            </li>
                            <li class="clearfix">
                                <span v-if="xgif" class="ys_tit w224 qmzt zitys" style="width: 2rem !important;">是否备案：</span>
                                <span v-else class="ys_tit w224 qmzt" style="width: 2rem !important;">是否备案：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <label class="mr20" @click="gszcclass"><input type="radio" value="1" v-model="sfba" name="sfba">是</label>
                                    <label @click="gszcclass"><input type="radio" value="2" v-model="sfba" name="sfba">否</label>
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input type="text" value="" readonly onfocus="this.blur()" v-model="sfbasee" placeholder="请选择">
                                </div>
                            </li>
                            <!--<li class="clearfix">
                                <span class="ys_tit w224">配合备案时间：</span>
                                &lt;!&ndash;<div class="ys_item_con fl">
                                    <input type="text" value="" v-model="batime" placeholder="请输入">
                                </div>&ndash;&gt;
                                <div class="ys_item_con fl">
                                    <input type="text" value="" readonly placeholder="请选择配合备案时间"  v-model.trim="batime" @click="openPicker()">
                                   &lt;!&ndash; <i class="calendar_icon"  @click="openPicker()"></i>&ndash;&gt;
                                </div>
                            </li>-->
                            <li class="clearfix pr" v-show="sfba == 2">
                                <span class="ys_tit qmzt zitys" v-if="xgif" style="width: 2rem !important;">配合备案时间：</span>
                                <span class="ys_tit qmzt" v-else style="width: 2rem !important;">配合备案时间：</span>
                                <div class="ys_item_con fl" v-if="xgif">
                                    <input type="text" value=""
                                           readonly
                                           onfocus="this.blur()"
                                           placeholder="请选择配合备案时间"
                                           v-model="batime"
                                           @click="openPicker3()">
                                    <i class="calendar_icon" @click="openPicker3()"></i>
                                </div>
                                <div class="ys_item_con fl" v-else>
                                    <input type="text" value=""
                                           readonly
                                           onfocus="this.blur()"
                                           placeholder="请选择配合备案时间"
                                           v-model="batime"
                                    >
                                </div>
                            </li>
                        </div>
                    </div>
                    <!--  <li class="clearfix pr mb20">
                          <span class="ys_tit zyzd">空置时间：</span>
                          <div class="ys_item_con fl">
                              <input type="text" value="" readonly placeholder="请选择日期"  v-model.trim="kzsj" @click="openPicker()">
                              <i class="calendar_icon"  @click="openPicker()"></i>
                          </div>
                          <div class="ys_item_con fl" v-else>
                              <input type="text" value="" readonly onfocus="this.blur()" placeholder="请选择日期"  v-model.trim="kzsj">
                              <i class="calendar_icon"></i>
                          </div>
                      </li>-->





                    <!--<li class="clearfix" style="font-size: 0.32rem;border-bottom-left-radius:5px;border-bottom-right-radius:5px;box-shadow: 1px 1px 3px rgb(196,195,200);line-height: 1rem !important;">
                        <span class="ys_tit w170" style="width: 2rem !important;padding-left: 0.2rem;">合作意向：</span>
                        <div class="ys_item_con fl">
                            <input type="text" value="" v-model.trim="lpsjgs" onfocus="this.blur()" placeholder="请选择" style="padding-left:34%;font-size: 0.32rem;width: 80%;" @click="openQuality6">
                            <i class="right_arrow" @click="openQuality6">&gt;</i>
                        </div>
                    </li>-->

                </ul>

                <!--<a href="javascript:;" class="ys_default_btn mb80" v-if="saveqx" @click="saveBuildMsg">保存</a>-->
                <!--<a href="javascript:;" class="ys_default_btn mb80" v-else @click="fanhui">返回</a>-->
            </div>
        </div>
        <div style="width: 100%;position: absolute;height: 1.2rem;bottom:0;left: 0;right: 0;" class="bottom">
            <div v-show="xgif" style="height: 1.2rem;background-color: white; box-shadow: 0 0 5px #000;">
                <a href="javascript:;" style="width: 36%;margin: 0;float: left;margin-left: 0.4rem;margin-top: 0.2rem; box-shadow: 0 0 5px #000;" class="anniu" @click="saveBuildMsg">保存</a>
                <a href="javascript:;" style="width: 36%;margin: 0;float: right;margin-right: 0.4rem;margin-top: 0.2rem;background-color: rgb(255,168,32); box-shadow: 0 0 5px #000;" class="anniu" @click="saveBuildMsg2">保存并跟进</a>
            </div>
        </div>

        <!--日期选择-->
        <mt-datetime-picker
                ref="picker"
                v-model="pickerValue"
                type="date"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                :startDate="startDate"
                @confirm="handleConfirm">
        </mt-datetime-picker>
        <!--开票日期选择-->
        <mt-datetime-picker
                ref="picker2"
                v-model="pickerValue"
                type="date"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                :startDate="startDate"
                @confirm="handleConfirm2">
        </mt-datetime-picker>
        <!--开票日期选择-->
        <mt-datetime-picker
                ref="picker3"
                v-model="pickerValue"
                type="date"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                :startDate="startDate"
                @confirm="handleConfirm3">
        </mt-datetime-picker>

        <!--楼盘级别-->
        <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureLevel">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureLevel">确定</span>
            </div>
            <mt-picker :slots="slots" @change="selectLevel"></mt-picker>
        </mt-popup>

        <!--对接人姓名-->
        <mt-popup v-model="popQuality" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureQuality">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureQuality">确定</span>
            </div>
            <mt-picker :slots="slots_quality" @change="selectQuality"></mt-picker>
        </mt-popup>
        <!--楼盘品质-->
        <mt-popup v-model="popQuality2" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureQuality2">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureQuality2">确定</span>
            </div>
            <mt-picker :slots="slots_quality2" @change="selectQuality2"></mt-picker>
        </mt-popup>
        <!--楼盘品质-->
        <mt-popup v-model="popQuality3" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureQuality3">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureQuality3">确定</span>
            </div>
            <mt-picker :slots="slots_quality3" @change="selectQuality3"></mt-picker>
        </mt-popup>
        <!--楼盘品质-->
        <mt-popup v-model="popQuality4" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureQuality4">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureQuality4">确定</span>
            </div>
            <mt-picker :slots="slots_quality4" @change="selectQuality4"></mt-picker>
        </mt-popup>
        <!--楼盘品质-->
        <mt-popup v-model="popQuality5" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureQuality5">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureQuality5">确定</span>
            </div>
            <mt-picker :slots="slots_quality5" @change="selectQuality5"></mt-picker>
        </mt-popup>
        <!--合作意向-->
        <mt-popup v-model.trim="popQuality6" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="sureQuality6">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="sureQuality6">确定</span>
            </div>
            <mt-picker :slots="slots_quality6" @change="selectQuality6"></mt-picker>
        </mt-popup>


    </div>
</template>
<script>

    const lang = {
        '业主': 1,
        '代理人': 2,
    };

    const level = {
        "出资":"1","代理":"2"
    };

    const cq = {
        "公司产权":"1","个人产权":"2"
    };

    const cqz = {
        "共有产权证":"1","个人产权证":"2"
    };

    const hz = {
        "A(可约业主可收购)":"1","B(深度议价中)":"2","C(初步审核)":"3"
    };
    import { Toast } from 'mint-ui'; //toast
    import { Indicator } from 'mint-ui'; //toast

    import { MessageBox } from 'mint-ui'; //弹窗

    import {DatetimePicker} from 'mint-ui';  //日期选择

    import {Popup} from 'mint-ui'; //弹窗

    export default {
        components: {
            DatetimePicker,
            Popup
        },

        data () {
            return {
                id:'',
                xgif:false,
                fyid:'',
                lpname:'',
                zdhname:'',
                fybh:'',
                duijierenif:false,
                genjingondanif:1,
                duijie:true,
                fyyzid:'',//合单id
                hzyxid:'',//合作意向id
                hzyx:'',//合作意向
                duijierid:'业主',//对接人
                djrid:'',//对接人id
                djrnameid:'',//对接人姓名id
                cshy:'',//从事行业
                mzq:'',//免租期
                Price:'',//价格
                qynx:'',//签约年限
                dzsort:'',//递增方式
                zzsort:'',//接受转租形式
                zzsortsee:'',//接受转租形式
                addxians:true,
                gszc:'',//配合工商注册
                gszcsee:'',//配合工商注册
                kjfp:'',//配合开具发票
                kjfpsee:'',//配合开具发票
                kpsj:'',//发票时间
                chqattach:'',//产权归属
                Sfdy:'',//是否已做抵押
                Sfdysee:'',//是否已做抵押
                chqsort:'',//产权证类别
                sfyj:'',//产权证是否原件
                sfyjsee:'',//产权证是否原件
                sfgszc:'',//是否有公司注册
                sfgszcsee:'',//是否有公司注册
                qctime:'',//迁出时间
                sfba:'',//是否备案
                sfbasee:'',//是否备案
                batime:'',//配合备案时间
                year:'',//对接人年龄
                phone:'',//对接人电话
                xb:'',//对接人性别
                xbsee:'',//对接人性别
                xgbq:'',//性格特征
                xgss:[],
                xgbqid:[],
                xgssid:[],
                xgbq_all:[],
                sgbqsfys:true,
                xgbqif:false,
                xaddress:'',//对接人现住址
                wtsort:'',//委托方式
                yezhuzshuj:[],
                yezhu:[],
                stauts:'',









                "lpid": "", //楼盘id
                "topic": "", //楼盘名称
                "address": "", //地址
                "tsbq": [], //特色标签
                "kfsh": "", //开发商名称
                "kprq": "", //开盘日期(必选)
                "lpjb": "", //楼盘级别(必选)
                "chqxz": [], //产权性质
                "lppz": "", //楼盘品质 1优 2良 3差
                "zxjnjg": "", //均价
                "shyl": "",  //使用率
                "hshkzbl": "", //户数空置比例
                "zxptmx": "",  //装修设施配套明细
                "lpsjgs": "", //楼盘设计公司
                "lpsjs": "", //楼盘设计师
                "lpsjfg": "", //楼盘设计风格
                "tsbq_all":[],
                "ryzt":"",//人员状态的权限
                "qxzt":"",//权限状态码

                //特色标签权限的判断
                /*teqx:true,
                 kfsqx:false,
                 cqxzqx:true,
                 lpjjqx:false,
                 zxptqx:false,
                 lpsjqx:false,
                 plsjsqx:false,
                 lpsjsfgqx:false,
                 kprqqx:true,
                 lpjbqx:true,
                 lppzqx:true,
                 saveqx:true,*/
                teqx:0,
                kfsqx:0,
                cqxzqx:0,
                lpjjqx:0,
                zxptqx:0,
                lpsjqx:0,
                plsjsqx:0,
                lpsjsfgqx:0,
                kprqqx:0,
                lpjbqx:0,
                lppzqx:0,
                saveqx:0,


                //日期
                pickerValue: '',
                startDate: new Date("2000-01-01"),
                //楼盘级别
                lpjb: '',
                slots: [
                    {
                        values: ['5A', '甲', '乙', '公寓', '商务', '综合'],
                    }
                ],

                //对接人姓名
                slots_quality: [
                    {
                        values: [],
                    }
                ],
                //对接人性别
                slots_quality2: [
                    {
                        values: ["","男", "女"],
                    }
                ],
                //委托方式
                slots_quality3: [
                    {
                        values: ["","出资", "代理"],
                    }
                ],
                //委托方式
                slots_quality4: [
                    {
                        values: ["","公司产权", "个人产权"],
                    }
                ],
                //委托方式
                slots_quality5: [
                    {
                        values: ["","共有产权证", "个人产权证"],
                    }
                ],
                //合作意向
                slots_quality6: [
                    {
                        values: ['','A(可约业主可收购)', 'B(深度议价中)', 'C(初步审核)'],
                    }
                ],



                //合作意向弹窗显示隐藏
                popupVisible: false,

                //合作意向弹窗隐藏
                popQuality: false,
                popQuality2: false,
                popQuality3: false,
                popQuality4: false,
                popQuality5: false,
                popQuality6: false,
                //yt_all: [{"name":"金融投资","id":"153"},{"name":"文化传媒","id":"161"},{"name":"教育培训","id":"152"},{"name":"休闲娱乐","id":"4"},{"name":"IT互联网","id":"5"},{"name":"机构组织","id":"6"},{"name":"专业服务","id":"7"},{"name":"贸易","id":"8"},{"name":"医药医疗","id":"9"},{"name":"多元化集团","id":"10"},{"name":"综合","id":"11"},{"name":"其它","id":"12"}]


            }
        },
        computed:{
            chqxz_c(){
                if(this.chqxz.length < 1){
                    return "请选择标签";
                }
                const map = {"1":"写字楼", "2":"公寓","3":"商务楼","5":"商业"};
                let tip = this.chqxz.map((item,idx)=>{return map[item.toString()]});
                return tip.join(",");
            },
            /*tsbq_t(){
                if(this.tsbq.length < 1){
                    return "请选择标签";
                }
                let tags = this.tsbq.map((t)=>{
                    for(let i = 0; i < this.tsbq_all.length; ++i){
                        if(this.tsbq_all[i].id == t){
                            return this.tsbq_all[i].topic;
                        }
                    }
                });

                return tags.join(",");
            },*/
            //将得到的id数组转化为逗号
            xgbq_t(){
                if(this.xgbq.length < 1){
                    return "请选择标签";
                }
                let tags = this.xgbq.map((t)=>{
                    for(let i = 0; i < this.xgbq_all.length; ++i){
                        if(this.xgbq_all[i].id === t){
                            return this.xgbq_all[i].topic;
                        }
                    }
                });
                //return tags.join(",");
                return tags;
            }
        },
        methods: {
            //特色标签权限的判断
            tebqqxpd(){
                this.fyyzid = this.$route.params.fyyzid;
                this.fyid = this.$route.params.fyid;
                this.lpid = this.$route.params.lpid;
                const url1 = this.$api + "/yhcms/web/wxqx/getFyBt.do";
                this.$http.post(url1, {"fyid":this.fyid,"foreEndType":2,"code":"30000008"}).then((res)=>{
                        Indicator.close();
                        const data = JSON.parse(res.bodyText).data;
                        this.lpname = data.topic;
                        this.zdhname = data.zdh +'-'+ data.fybh;
                        this.fybh = data.fybh;
                }, (res)=>{
                    Indicator.close()
                });
                const url = this.$api + "/yhcms/web/wxqx/getGdxx.do";
                this.$http.post(url, {"fyyxid":this.$route.params.fyyzid,"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    const data1 = JSON.parse(res.bodyText).data1;
                        if(data1.hzyx != ''){
                            if(data1.hzyx == 1){
                                this.hzyx = "A(可约业主可收购)";
                            }else if(data1.hzyx == 2){
                                this.hzyx = "B(深度议价中)";
                            }else if(data1.hzyx == 3){
                                this.hzyx = "C(初步核实)";
                            }
                        }
                        this.hzyxid = data1.id;
                        this.id = data.id;
                        if(data.djrstate == 1){
                            this.duijierid = '业主';
                            this.duijie = true;
                            this.yezhuid();
                        }else if(data.djrstate == 2){
                            this.duijierid = '代理人';
                            this.duijie = false;
                            this.dailirenid();
                        }else{
                            this.duijierid = '业主';
                            this.duijie = true;
                            this.yezhuid();
                        }


                        this.cshy = data.cshy;
                        this.mzq = data.mzq;
                        this.Price = data.price;

                        this.qynx = data.qynx;
                        this.dzsort = data.dzsort;
                        this.zzsort = data.zzsort;
                        if(this.zzsort == 2){
                            this.zzsortsee = '否';
                        }else if(this.zzsort == 1){
                            this.zzsortsee = '是';
                        }else{
                            this.zzsortsee = '';
                        }

                        this.gszc = data.gszc;
                        if(this.gszc == 2){
                            this.gszcsee = '否';
                        }else if(this.gszc == 1){
                            this.gszcsee = '是';
                        }else{
                            this.gszcsee = '';
                        }
                        this.kjfp = data.kjfp;
                        if(data.fptime){
                            var date =  new Date(data.fptime);
                            var y = 1900+date.getYear();
                            var m = "0"+(date.getMonth()+1);
                            var d = "0"+date.getDate();
                            var tt11= y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
                            this.kpsj = tt11;
                        }else{
                            this.kpsj = '';
                        }
                        if(this.kjfp == 2){
                            this.kjfpsee = '否';
                        }else if(this.kjfp == 1){
                            this.kjfpsee = '是';
                        }else{

                            this.kjfpsee = '';
                        }
                        if(data.chqattach == 1){
                            this.chqattach = '公司产权';
                        }else if(data.chqattach == 2){
                            this.chqattach = '个人产权';
                        }
                        this.Sfdy = data.sfdy;
                        if(this.Sfdy == 2){
                            this.Sfdysee = '否';
                        }else if(this.Sfdy == 1){
                            this.Sfdysee = '是';
                        }else{
                            this.Sfdysee = '';
                        }
                        if(data.chqsort == 1){
                            this.chqsort = '共有产权证';
                        }else if(data.chqsort == 2){
                            this.chqsort = '个人产权证';
                        }
                        this.sfyj = data.sfyj;
                        if(this.sfyj == 2){
                            this.sfyjsee = '否';
                        }else if(this.sfyj == 1){
                            this.sfyjsee = '是';
                        }else{
                            this.sfyjsee = '';
                        }
                        this.sfgszc = data.sfgszc;
                        if(this.sfgszc == 2){
                            this.sfgszcsee = '否';
                        }else if(this.sfgszc == 1){
                            this.sfgszcsee = '是';
                        }else{
                            this.sfgszcsee = '';
                        }
                        if(data.qctime){
                            var date =  new Date(data.qctime);
                            var y = 1900+date.getYear();
                            var m = "0"+(date.getMonth()+1);
                            var d = "0"+date.getDate();
                            var tt11= y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
                            this.qctime = tt11;
                        }else{
                            this.qctime = '';
                        }
                        if(data.wtsort == 1){
                            this.wtsort = '出资';
                        }else if(data.wtsort == 2){
                            this.wtsort = '代理';
                        }
                        this.sfba = data.sfba;
                        if(this.sfba == 2){
                            this.sfbasee = '否';
                        }else if(this.sfba == 1){
                            this.sfbasee = '是';
                        }else{
                            this.sfbasee = '';
                        }
                        if(data.batime){
                            var date =  new Date(data.batime);
                            var y = 1900+date.getYear();
                            var m = "0"+(date.getMonth()+1);
                            var d = "0"+date.getDate();
                            var tt11= y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
                            this.batime = tt11;
                        }else{
                            this.batime = '';
                        }
                        this.year = data.year;
                        this.djrnameid = data.djrid;


                    /*this.getInitData();
                     this.getTsbq();*/



                    /* const url1 = this.$api + "/yhcms/web/wxqx/getGdxx.do";
                     this.$http.post(url1, {"fyyxid":this.$route.params.fyyzid,"foreEndType":2,"code":"30000008"}).then((res)=>{
                     Indicator.close();
                     const data = JSON.parse(res.bodyText).data1;
                     this.hzyxid = data.hzyx;
                     this.duijierid = data.id;
                     /!*this.getInitData();
                     this.getTsbq();*!/


                     }, (res)=>{
                     Indicator.close()
                     });*/





                }, (res)=>{
                    Indicator.close()
                });
            },
            bianji(){
                $('.zhongjian').css('bottom','1.2rem');
                this.xgif = true;

            },
            addtianj(){
                if(this.addxians){
                    this.addxians = false;
                    this.xgbqif = true;
                }else{
                    this.addxians = true;
                    this.xgbqif = false;
                }

            },

            djrxx(a,e){
                const target = $(e.target).closest("div"), val = $(target).find("a");
                val.addClass("xx").parent().siblings().children().removeClass("xx");
                target.addClass("xxbg").siblings().removeClass("xxbg");
                if(a == 1){
                    this.genjingondanif = 1;
                }
                if(a == 2){
                    this.genjingondanif = 2;
                }
                if(a == 3){
                    this.genjingondanif = 3;
                }
            },
            duijiere(e){
                const target = $(e.target), val = target.attr("rel");
                if(this.duijie){
                    this.duijie = false;
                }else{
                    this.duijie = true;
                }
                this.djrid = '';
                this.phone = '';
                this.xb = '';
                this.xgbq = '';
                this.xaddress = '';
                this.stauts = '';
                this.slots_quality = [
                    {
                        values: [],
                    }
                ];
                if(val == 1){
                    this.duijierid = '代理人';
                    this.dailirenid();
                }else{
                    this.duijierid = '业主';
                    this.yezhuid();
                }
            },

            //获取业主id
            yezhuid(){
                this.yezhuzshuj = [];
                this.yezhu = [];
                const url = this.$api + "/yhcms/web/wxqx/getLpZdYzxx.do";
                this.$http.post(url, {"parameters":{"fyid":this.fyid},"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    for(var i=0;i<data.length;i++){
                        this.yezhuzshuj[i] = data[i];
                        this.yezhu[i] = data[i].topic;
                    }
                    this.slots_quality[0].values = this.yezhu;
                    if(this.djrnameid != ""){
                        for(var i=0;i<this.yezhuzshuj.length;i++){
                            if(this.djrnameid == this.yezhuzshuj[i].id){
                                this.stauts = 1;
                                this.djrnameid = this.yezhuzshuj[i].id;
                                if(this.yezhuzshuj[i].topic || this.yezhuzshuj[i].topic != 'undefined'){
                                    this.djrid = this.yezhuzshuj[i].topic;
                                }else{
                                    this.djrid = '';
                                }
                                this.phone = this.yezhuzshuj[i].phone;
                                this.xb = this.yezhuzshuj[i].xb;
                                if(this.xb == ''){
                                    this.xbsee = this.yezhuzshuj[i].xb;
                                }else if(this.xb == 1){
                                    this.xbsee = '男';
                                }else{
                                    this.xbsee = '女';
                                }
                                this.xgbq = this.yezhuzshuj[i].tsbq;
                                this.xgss = this.xgbq.split(';');
                                for(var g=0;g<this.xgbq_all.length;g++){
                                    for(var k=0;k<this.xgss.length;k++){
                                        if(this.xgbq_all[g].id == this.xgss[k]){
                                            this.xgssid[k] = this.xgss[k];
                                            this.xgss[k] = this.xgbq_all[g].topic;
                                        }
                                        if(this.xgbq_all[g].topic == this.xgss[k]){
                                            this.xgssid[k] =  this.xgbq_all[g].id;
                                        }
                                    }
                                 }
                                this.xgbqid = this.xgssid;
                                this.xaddress = this.yezhuzshuj[i].address;
                            }
                        }
                        console.log(this.xgbqid);
                        console.log(this.xgssid);
                        console.log(this.xgss);
                        console.log(this.xgbq);
                    }
                }, (res)=>{
                    Indicator.close()
                });
            },
            //获取代理人的id
            dailirenid(){
                this.yezhuzshuj = [];
                this.yezhu = [];
                const url = this.$api + "/yhcms/web/wxqx/getLpZdDlrxx.do";
                this.$http.post(url, {"parameters":{"fyid":this.fyid},"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    for(var i=0;i<data.length;i++){
                        this.yezhuzshuj[i] = data[i];
                        this.yezhu[i] = data[i].topic;
                    }
                    this.slots_quality[0].values = this.yezhu;
                    if(this.djrnameid != ""){
                        for(var i=0;i<this.yezhuzshuj.length;i++){
                            if(this.djrnameid == this.yezhuzshuj[i].id){
                                this.stauts = 1;
                                this.djrnameid = this.yezhuzshuj[i].id;
                                if(this.yezhuzshuj[i].topic || this.yezhuzshuj[i].topic != 'undefined'){
                                    this.djrid = this.yezhuzshuj[i].topic;
                                }else{
                                    this.djrid = '';
                                }

                                this.phone = this.yezhuzshuj[i].phone;
                                this.xb = this.yezhuzshuj[i].xb;
                                if(this.xb == ''){
                                    this.xbsee = this.yezhuzshuj[i].xb;
                                }else if(this.xb == 1){
                                    this.xbsee = '男';
                                }else{
                                    this.xbsee = '女';
                                }
                                this.xgbq = this.yezhuzshuj[i].tsbq;
                                this.xgss = this.xgbq.split(';');
                                for(var g=0;g<this.xgbq_all.length;g++){
                                    for(var k=0;k<this.xgss.length;k++){
                                        if(this.xgbq_all[g].id == this.xgss[k]){
                                            this.xgssid[k] = this.xgss[k];
                                            this.xgss[k] = this.xgbq_all[g].topic;
                                        }
                                        if(this.xgbq_all[g].topic == this.xgss[k]){
                                            this.xgssid[k] = this.xgbq_all[g].id;
                                        }
                                    }
                                }
                                this.xgbqid = this.xgssid;
                                this.xaddress = this.yezhuzshuj[i].address;
                            }
                        }
                    }
                }, (res)=>{
                    Indicator.close();
                });
            },
            duijierendiji(){
                alert(1111);
                alert(this.xb);
            },
            gszcclass(){
                this.batime = '';
            },
            gszc1sclass(){
                this.qctime = '';
            },
            kpsjclass(){
                this.kpsj = '';
            },
            getXgbq(){
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/wxqx/getXgbq.do";
                let that = this;
                this.$http.post(url).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    that.xgbq_all = data;
                }, (res)=>{
                    Indicator.close()
                });
            },
            //选择tag
            /*selectTag(e){
                const target = $(e.target), val = target.attr("value");
                if(!val){return;}
                if ($(e.target).hasClass('active')) {
                    let tsbq_t = new Set(this.tsbq);
                    tsbq_t.delete(val);
                    this.tsbq = [...tsbq_t];
                    $(e.target).removeClass('active');
                } else {
                    let tsbq_t = new Set(this.tsbq);
                    tsbq_t.add(val);
                    this.tsbq = [...tsbq_t];
                    $(e.target).addClass('active');
                }
            },*/
            //选择性格标签
            selectTag(e,id,idx,top){
                if(this.xgss.length < 5){
                    const target = $(e.target);
                    target.addClass('active');
                    this.xgssid.push(id);
//                $('.ys_tag').eq(idx).addClass('active');
                    for(var g=0;g<this.xgbq_all.length;g++){
                        for(var k=0;k<this.xgssid.length;k++){
                            if(this.xgbq_all[g].id == this.xgssid[k]){
                                this.xgbqid[k] = this.xgssid[k];
                                this.xgssid[k] = this.xgbq_all[g].topic;
                            }
                        }
                    }
                    for(var n=0;n<this.xgssid.length;n++){
                        for (var j = n+1; j < this.xgssid.length; j++) {
                            if(this.xgssid[n] == this.xgssid[j]){
                                this.xgssid.splice(j,1);
                                j--;
                            }
                        }
                    }
                    this.xgss = this.xgssid;
                    console.log(this.xgss);
                }else{
                    Toast({
                        message: '性格标签最多选5个',
                        position: 'middle'
                    });
                }
            },
            selectTagup(e,id,idx,top){
                setTimeout(function(){
                    const target = $(e.target);
                    target.removeClass('active');
                    // _this.$router.push({path:'/index'});
                },300);

            },
            //删除性格标签
            deletebqi(e,idx){
                this.xgssid.splice(idx,1);
               /* for(var g=0;g<this.xgbq_all.length;g++){
                    for(var k=0;k<this.xgss.length;k++){
                        if(this.xgbq_all[g].topic == this.xgss[k]){
                            this.xgbqid[k] = this.xgbq_all[g].id;
                            //this.xgss[k] = this.xgbq_all[g].topic;
                        }
                    }
                }
*/
                for(var g=0;g<this.xgbq_all.length;g++){
                    for(var k=0;k<this.xgssid.length;k++){
                        if(this.xgbq_all[g].id == this.xgssid[k]){
                            this.xgbqid[k] = this.xgssid[k];
                            this.xgssid[k] = this.xgbq_all[g].topic;
                        }
                    }
                }
                for(var n=0;n<this.xgssid.length;n++){
                    for (var j = n+1; j < this.xgssid.length; j++) {
                        if(this.xgssid[n] == this.xgssid[j]){
                            this.xgssid.splice(j,1);
                            j--;
                        }
                    }
                }
                this.xgss = this.xgssid;






                //target.removeClass('active');

//                $('.ys_tag').eq(idx).addClass('active');
            },






            sfygsclass(){
                let that = this;
                setTimeout(function (){
                    if(that.sfygs == 1){
                        $(".gsdivclass").removeClass('showClass');

                    }else if(that.sfygs == 0){
                        $(".gsdivclass").addClass('showClass');

                    }
                }, 1);

            },
            //日期panel展示
            openPicker() {
                this.$refs.picker.open();
            },
            //日期panel展示
            openPicker2() {
                this.$refs.picker2.open();
            },
            //日期panel展示
            openPicker3() {
                this.$refs.picker3.open();
            },

            //日期确定kphandleConfirm
            handleConfirm(value){
                this.kpsj = this.transformDate(value);
            },
            //日期确定kphandleConfirm
            handleConfirm2(value){
                this.qctime = this.transformDate(value);
            },
            //日期确定kphandleConfirm
            handleConfirm3(value){
                this.batime = this.transformDate(value);
            },

            //楼盘类型panel展示
            openLevel() {
                //this.lpjb = '乙';
                this.popupVisible = true;
            },


            //选择类型
            selectLevel(picker, values) {
                this.lpjb = values[0];
            },

            //类型确定
            sureLevel(){
                this.popupVisible = false;
            },


            //打开对接人姓名
            openQuality(){
                //this.lppz = '差';
                this.xgbqid = [];
                this.xgss = [];
                this.xgssid = [];
                this.xgbq = '';
                this.popQuality = true;
            },
            openQuality2(){
                //this.lppz = '差';
                this.popQuality2 = true;
            },
            //委托方式
            openQuality3(){
                //this.lppz = '差';
                this.popQuality3 = true;
            },
            openQuality4(){
                //this.lppz = '差';
                this.popQuality4 = true;
            },
            openQuality5(){
                //this.lppz = '差';
                this.popQuality5 = true;
            },
            //合作意向
            openQuality6(){
                //this.lppz = '差';
                this.popQuality6 = true;
            },

            //选择对接人
            selectQuality(picker, values){
                if(this.stauts == 1){
                    this.stauts = 2;
                }else{
                    if(values[0]){
                        this.djrid = values[0];
                    }
                    for(var i=0;i<this.yezhu.length;i++){
                        if(this.djrid == this.yezhu[i]){
                            this.djrnameid = this.yezhuzshuj[i].id;
                            this.phone = this.yezhuzshuj[i].phone;
                            this.xb = this.yezhuzshuj[i].xb;
                            if(this.xb == ''){
                                this.xbsee = this.yezhuzshuj[i].xb;
                            }else if(this.xb == 1){
                                this.xbsee = '男';
                            }else{
                                this.xbsee = '女';
                            }
                            this.xgbq = this.yezhuzshuj[i].tsbq;
                            this.xgss = this.xgbq.split(';');
                            for(var g=0;g<this.xgbq_all.length;g++){
                                for(var k=0;k<this.xgss.length;k++){
                                    if(this.xgbq_all[g].id == this.xgss[k]){
                                        this.xgssid[k] = this.xgss[k];
                                        this.xgss[k] = this.xgbq_all[g].topic;
                                    }
                                }
                            }
                            this.xaddress = this.yezhuzshuj[i].address;
                        }
                    }
                }
            },
            selectQuality2(picker, values){
                this.lppz = values[0];
            },
            //委托方式
            selectQuality3(picker, values){
                this.wtsort = values[0];
            },
            //委托方式
            selectQuality4(picker, values){
                this.chqattach = values[0];
            },
            //委托方式
            selectQuality5(picker, values){
                this.chqsort = values[0];
            },
            selectQuality6(picker, values){
                this.hzyx = values[0];
            },

            //品质确定
            sureQuality(){
                this.popQuality = false;
            },
            sureQuality2(){
                this.popQuality2 = false;
            },
            //委托方式
            sureQuality3(){
                this.popQuality3 = false;
            },
            //委托方式
            sureQuality4(){
                this.popQuality4 = false;
            },
            sureQuality5(){
                this.popQuality5 = false;
            },
            //合作意向
            sureQuality6(){
                this.popQuality6 = false;
            },


            //打开品质
            openUse(){
                this.shyl = '非常';
                this.popUse = true;
            },

            //选择品质
            selectUse(picker, values){
                this.shyl = values[0];
            },

            //品质确定
            sureUse(){
                this.popUse = false;
            },

            //日期转换
            transformDate: function (date) {
                var str = '';
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                str = year + '-' + this.addZero(month) + '-' + this.addZero(day);
                return str;
            },

            //补零
            addZero(n){
                return n = n < 10 ? '0' + n : '' + n;
            },



            //获取后台的数据
            getInitData(){
                const lpid = this.$route.params.lpid;
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/lpjbxx/getLpjbxx.do";
                let that = this;
                this.$http.post(url, {"parameters":{ "lpid":lpid},"foreEndType":2,"code":"30000008"}).then((res)=>{
                    Indicator.close();
                    const data = JSON.parse(res.bodyText).data;
                    that.lpid = lpid;
                    that.topic = data.topic;
                    that.address = data.address;
                    that.tsbq = data.tsbq.map((t)=>{return t.id});
                    //that.tsbq = yt_all;
                    /*let shyt = data.shyt ? data.shyt.split(";"):[];
                     that.shyt = shyt;*/
                    /*that.tsbq = data.tsbq ? data.tsbq.split(","):[];*/
                    that.kfsh = data.kfsh;
                    if(data.kprq!=''){
                        //将时间戳转化为标准的格式
                        /*  var date =  new Date(data.kprq);
                         var y = 1900+date.getYear();
                         var m = "0"+(date.getMonth()+1);
                         var d = "0"+date.getDate();
                         var   tt11= y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);*/
                        that.kprq = data.kprq.substring(0,10);
                    }
                    if(data.lpjb==1){
                        that.lpjb ="5A" ;
                    }
                    if(data.lpjb==2){
                        that.lpjb ="甲" ;
                    }
                    if(data.lpjb==3){
                        that.lpjb ="乙" ;
                    }

                    if(data.lpjb==4){
                        that.lpjb ="公寓" ;
                    }
                    if(data.lpjb==5){
                        that.lpjb ="商务" ;
                    }
                    if(data.lpjb==6){
                        that.lpjb ="综合" ;
                    }
                    var array=new Array();
                    var k=0;
                    that.chqxz = data.chqxz.split("、");
                    for(var i=0;i<that.chqxz.length;i++){
                        if(that.chqxz[i] == 1 || that.chqxz[i] == 2 || that.chqxz[i] == 3 || that.chqxz[i] == 5){
                            array[k] = that.chqxz[i];
                            k++;
                        }
                    }
                    that.chqxz = array;
                    if(data.lppz==1){
                        that.lppz ="优" ;
                    }else  if(data.lppz==2){
                        that.lppz ="良" ;
                    }else  if(data.lppz==3){
                        that.lppz ="差" ;
                    }

                    that.zxjnjg = data.zxjnjg;
                    that.shyl = data.shyl;
                    that.hshkzbl = data.kzbl;
                    that.zxptmx = data.zxptmx;
                    that.lpsjgs = data.lpsjgs;
                    that.lpsjs = data.lpsjs;
                    that.lpsjfg = data.lpsjfg;
                    //只有查看和空白字段添加的权限
                    if(this.qxzt == 20 || this.qxzt == 30 || this.qxzt == 42){
                        this.saveqx = false;
                        this.teqx = false;
                        if(this.tsbq.length == 0){
                            this.teqx = true;
                            this.saveqx = true;
                        }
                        this.kfsqx = true;
                        if(this.kfsh == ""){
                            this.kfsqx = false;
                            this.saveqx = true;
                        }
                        this.cqxzqx = false;
                        // if(this.chqxz.length == 0){
                        if(data.chqxz==''){
                            this.cqxzqx = true;
                            this.saveqx = true;
                        }
                        this.lpjjqx = true;
                        if(this.zxjnjg == ""){
                            this.lpjjqx = false;
                            this.saveqx = true;
                        }
                        this.zxptqx = true;
                        if(this.zxptmx == ""){
                            this.zxptqx = false;
                            this.saveqx = true;
                        }
                        this.lpsjqx = true;
                        if(this.lpsjgs == ""){
                            this.lpsjqx = false;
                            this.saveqx = true;
                        }
                        this.plsjsqx = true;
                        if(this.lpsjs == ""){
                            this.plsjsqx = false;
                            this.saveqx = true;
                        }
                        this.lpsjsfgqx = true;
                        if(this.lpsjfg == ""){
                            this.lpsjsfgqx = false;
                            this.saveqx = true;
                        }
                        this.kprqqx = false;
                        if(data.kprq == ""){
                            this.kprqqx = true;
                            this.saveqx = true;
                        }
                        this.lpjbqx = false;
                        if(data.lpjb == ""){
                            this.lpjbqx = true;
                            this.saveqx = true;
                        }
                        this.lppzqx = false;
                        if(data.lppz == ""){
                            this.lppzqx = true;
                            this.saveqx = true;
                        }

                    }

                    //this.tebqqxpd();
                }, (res)=>{
                    Indicator.close()
                });
            },

            getTsbq(){
                Indicator.open({
                    text: '',
                    spinnerType: 'fading-circle'
                });
                const url = this.$api + "/yhcms/web/lpjbxx/getTsbq.do";
                let that = this;
                this.$http.post(url).then((res)=>{
                    Indicator.close()
                    const data = JSON.parse(res.bodyText).data;
                    that.tsbq_all = data;
                }, (res)=>{
                    Indicator.close(that.tsbq_all);
                });
            },


            fanhui(){
                window.history.go(-1);
            },
            saveBuildMsg2(){

                /*if(!this.kfsh){
                 MessageBox('提示', '请填写开发商');
                 return;
                 }

                 if(this.kprq == ''){
                 MessageBox('提示', '请选择开盘日期');
                 return;
                 }

                 if(this.lpjb == ''){
                 MessageBox('提示', '请选择楼盘级别');
                 return;
                 }

                 if(!this.lppz){
                 MessageBox('提示', '请选择楼盘品质');
                 return;
                 }*/

                /*
                 Toast({
                 message: '保存成功',
                 position: 'bottom'
                 });
                 */
                if(this.djrid == ''){
                    MessageBox('提示', '姓名不能为空！');
                    return;
                }else if(this.phone == ''){
                    MessageBox('提示', '电话不能为空！');
                    return;
                }else{
                    Indicator.open({
                        text: '保存中...',
                        spinnerType: 'fading-circle'
                    });
                    const _this = this;
                    /*
                     setTimeout(function(){
                     _this.$router.push({path:'/list2'});
                     },1000);
                     */
                    /*if(this.tsbq == ""){
                     this.tsbq = "";
                     }else{
                     this.tsbq = "、" + this.tsbq.join("、") + "、";
                     }*/
                    if (this.duijierid == '业主') {
                        this.$http.post(
                            this.$api + "/yhcms/web/wxqx/saveZdYzxx.do",
                            {
                                "parameters": {
                                    "id": this.djrnameid,
                                    "fyid": this.fyid,
                                    "topic": this.djrid,
                                    "xgbq": this.xgbqid.join(';'),
                                    "phone": this.phone,
                                    "xb": this.xb,
                                    "xaddress": this.xaddress
                                }
                            }
                        ).then(function (res) {
                            Indicator.close();
                            var result = JSON.parse(res.bodyText);
                            if (result.success) {

                                //保存工单信息
                                let user22 = JSON.parse(localStorage.getItem('cook'));
                                this.$http.post(
                                    this.$api + "/yhcms/web/wxqx/updateGdxx.do",
                                    {
                                        "parameters": {
                                            "fyyxid": this.fyyzid,
                                            "id": this.id,//合单的id
                                            "djrstate": lang[this.duijierid],//对接人id
                                            "djrid": this.djrnameid,//业主的id
                                            "cshy": this.cshy,
                                            "mzq": this.mzq,
                                            "price": this.Price,
                                            "qynx": this.qynx,
                                            "dzsort": this.dzsort,
                                            "zzsort": this.zzsort,
                                            "gszc": this.gszc,
                                            "kjfp": this.kjfp,
                                            "chqattach": cq[this.chqattach],
                                            "sfdy": this.Sfdy,
                                            "chqsort": cqz[this.chqsort],
                                            "sfyj": this.sfyj,
                                            "year": this.year,
                                            "sfgszc": this.sfgszc,
                                            "qctime": this.qctime,
                                            "sfba": this.sfba,
                                            "batime": this.batime,
                                            "hzyx": hz[this.hzyx],
                                            "fpbatime": this.kpsj,
                                            "wtsort": level[this.wtsort],
                                            "cookie": user22.sjs
                                        }
                                    }
                                ).then(function (res) {
                                    Indicator.close();
                                    var result = JSON.parse(res.bodyText);
                                    if (result.success) {
                                        Toast({
                                            message: '保存成功',
                                            position: 'bottom',
                                            duration: 1000
                                        });
                                        setTimeout(function () {
                                            _this.$router.push({path: '/tianxiefenjin/' + _this.fyyzid + '/' + _this.fyid});

                                            // _this.$router.push({path:'/index'});
                                        }, 1000);
                                    } else {
                                        //this.$Message.error(res.message);
                                        Toast({
                                            message: '保存失败: ' + result.message,
                                            position: 'bottom'
                                        });
                                    }
                                }, function (res) {
                                    //this.$Message.error('保存失败');
                                    Toast({
                                        message: '保存失败! 请稍候再试',
                                        position: 'bottom'
                                    });
                                });

                                /*
                                 setTimeout(function(){
                                 history.go(-1);
                                 // _this.$router.push({path:'/index'});
                                 },1000);*/
                            } else {
                                //this.$Message.error(res.message);
                                Toast({
                                    message: '保存失败: ' + result.message,
                                    position: 'bottom'
                                });
                            }
                        }, function (res) {
                            //this.$Message.error('保存失败');
                            Toast({
                                message: '保存失败! 请稍候再试',
                                position: 'bottom'
                            });
                        });
                    } else if (this.duijierid == '代理人') {
                        this.$http.post(
                            this.$api + "/yhcms/web/wxqx/saveZdDlrxx.do",
                            {
                                "parameters": {
                                    "id": this.djrnameid,
                                    "fyid": this.fyid,
                                    "topic": this.djrid,
                                    "bqid": this.xgbqid.join(';'),
                                    "phone": this.phone,
                                    "xb": this.xb,
                                    "address": this.xaddress
                                }
                            }
                        ).then(function (res) {
                            Indicator.close();
                            var result = JSON.parse(res.bodyText);
                            if (result.success) {

                                //保存工单信息
                                let user22 = JSON.parse(localStorage.getItem('cook'));
                                this.$http.post(
                                    this.$api + "/yhcms/web/wxqx/updateGdxx.do",
                                    {
                                        "parameters": {
                                            "fyyxid": this.fyyzid,
                                            "id": this.id,//合单的id
                                            "djrstate": lang[this.duijierid],//对接人id
                                            "djrid": this.djrnameid,//业主的id
                                            "cshy": this.cshy,
                                            "mzq": this.mzq,
                                            "price": this.Price,
                                            "qynx": this.qynx,
                                            "dzsort": this.dzsort,
                                            "zzsort": this.zzsort,
                                            "gszc": this.gszc,
                                            "kjfp": this.kjfp,
                                            "chqattach": cq[this.chqattach],
                                            "sfdy": this.Sfdy,
                                            "chqsort": cqz[this.chqsort],
                                            "sfyj": this.sfyj,
                                            "year": this.year,
                                            "sfgszc": this.sfgszc,
                                            "qctime": this.qctime,
                                            "sfba": this.sfba,
                                            "batime": this.batime,
                                            "hzyx": hz[this.hzyx],
                                            "fpbatime": this.kpsj,
                                            "wtsort": level[this.wtsort],
                                            "cookie": user22.sjs
                                        }
                                    }
                                ).then(function (res) {
                                    Indicator.close();
                                    var result = JSON.parse(res.bodyText);
                                    if (result.success) {
                                        Toast({
                                            message: '保存成功',
                                            position: 'bottom',
                                            duration: 1000
                                        });

                                        setTimeout(function () {
                                            _this.$router.push({path: '/tianxiefenjin/' + _this.fyyzid + '/' + _this.fyid});
                                            // _this.$router.push({path:'/index'});
                                        }, 1000);
                                    } else {
                                        //this.$Message.error(res.message);
                                        Toast({
                                            message: '保存失败: ' + result.message,
                                            position: 'bottom'
                                        });
                                    }
                                }, function (res) {
                                    //this.$Message.error('保存失败');
                                    Toast({
                                        message: '保存失败! 请稍候再试',
                                        position: 'bottom'
                                    });
                                });


                                /*setTimeout(function(){
                                 history.go(-1);
                                 // _this.$router.push({path:'/index'});
                                 },1000);*/
                            } else {
                                //this.$Message.error(res.message);
                                Toast({
                                    message: '保存失败: ' + result.message,
                                    position: 'bottom'
                                });
                            }
                        }, function (res) {
                            //this.$Message.error('保存失败');
                            Toast({
                                message: '保存失败! 请稍候再试',
                                position: 'bottom'
                            });
                        });
                    }
                }

            },
            saveBuildMsg(){
                if(this.djrid == ''){
                     MessageBox('提示', '姓名不能为空！');
                     return;
                 }else if(this.phone == ''){
                    MessageBox('提示', '电话不能为空！');
                    return;
                }else{
                    Indicator.open({
                        text: '保存中...',
                        spinnerType: 'fading-circle'
                    });
                    const _this = this;
                    /*
                     setTimeout(function(){
                     _this.$router.push({path:'/list2'});
                     },1000);
                     */
                    /*if(this.tsbq == ""){
                     this.tsbq = "";
                     }else{
                     this.tsbq = "、" + this.tsbq.join("、") + "、";
                     }*/
                    if(this.duijierid == '业主'){
                        this.$http.post(
                            this.$api + "/yhcms/web/wxqx/saveZdYzxx.do",
                            {"parameters":
                                {"id":this.djrnameid,
                                    "fyid":this.fyid,
                                    "topic":this.djrid,
                                    "xgbq":this.xgbqid.join(';'),
                                    "phone":this.phone,
                                    "xb":this.xb,
                                    "xaddress":this.xaddress
                                }
                            }
                        ).then(function (res) {
                            Indicator.close();
                            var result = JSON.parse(res.bodyText);
                            if (result.success) {

                                //保存工单信息
                                let user22 = JSON.parse(localStorage.getItem('cook'));
                                this.$http.post(
                                    this.$api + "/yhcms/web/wxqx/updateGdxx.do",
                                    {"parameters":
                                        {
                                            "fyyxid":this.fyyzid,
                                            "id":this.id,//合单的id
                                            "djrstate":lang[this.duijierid],//对接人id
                                            "djrid":this.djrnameid,//业主的id
                                            "cshy":this.cshy,
                                            "mzq":this.mzq,
                                            "price":this.Price,
                                            "qynx":this.qynx,
                                            "dzsort":this.dzsort,
                                            "zzsort":this.zzsort,
                                            "gszc":this.gszc,
                                            "kjfp":this.kjfp,
                                            "chqattach":cq[this.chqattach],
                                            "sfdy":this.Sfdy,
                                            "chqsort":cqz[this.chqsort],
                                            "sfyj":this.sfyj,
                                            "year":this.year,
                                            "sfgszc":this.sfgszc,
                                            "qctime":this.qctime,
                                            "sfba":this.sfba,
                                            "batime":this.batime,
                                            "hzyx":hz[this.hzyx],
                                            "fpbatime":this.kpsj,
                                            "wtsort":level[this.wtsort],
                                            "cookie":user22.sjs
                                        }
                                    }
                                ).then(function (res) {
                                    Indicator.close();
                                    var result = JSON.parse(res.bodyText);
                                    if (result.success) {
                                        Toast({
                                            message: '保存成功',
                                            position: 'bottom',
                                            duration: 1000
                                        });

                                        setTimeout(function(){
                                            _this.$router.push({path: '/yixing_genjin'});
                                            // _this.$router.push({path:'/index'});
                                        },1000);
                                    } else {
                                        //this.$Message.error(res.message);
                                        Toast({
                                            message: '保存失败: ' + result.message,
                                            position: 'bottom'
                                        });
                                    }
                                }, function (res) {
                                    //this.$Message.error('保存失败');
                                    Toast({
                                        message: '保存失败! 请稍候再试',
                                        position: 'bottom'
                                    });
                                });

                                /*
                                 setTimeout(function(){
                                 history.go(-1);
                                 // _this.$router.push({path:'/index'});
                                 },1000);*/
                            } else {
                                //this.$Message.error(res.message);
                                Toast({
                                    message: '保存失败: ' + result.message,
                                    position: 'bottom'
                                });
                            }
                        }, function (res) {
                            //this.$Message.error('保存失败');
                            Toast({
                                message: '保存失败! 请稍候再试',
                                position: 'bottom'
                            });
                        });
                    }else if(this.duijierid == '代理人'){
                        this.$http.post(
                            this.$api + "/yhcms/web/wxqx/saveZdDlrxx.do",
                            {"parameters":
                                {"id":this.djrnameid,
                                    "fyid":this.fyid,
                                    "topic":this.djrid,
                                    "bqid":this.xgbqid.join(';'),
                                    "phone":this.phone,
                                    "xb":this.xb,
                                    "address":this.xaddress
                                }
                            }
                        ).then(function (res) {
                            Indicator.close();
                            var result = JSON.parse(res.bodyText);
                            if (result.success) {

                                //保存工单信息
                                let user22 = JSON.parse(localStorage.getItem('cook'));
                                this.$http.post(
                                    this.$api + "/yhcms/web/wxqx/updateGdxx.do",
                                    {"parameters":
                                        {
                                            "fyyxid":this.fyyzid,
                                            "id":this.id,//合单的id
                                            "djrstate":lang[this.duijierid],//对接人id
                                            "djrid":this.djrnameid,//业主的id
                                            "cshy":this.cshy,
                                            "mzq":this.mzq,
                                            "price":this.Price,
                                            "qynx":this.qynx,
                                            "dzsort":this.dzsort,
                                            "zzsort":this.zzsort,
                                            "gszc":this.gszc,
                                            "kjfp":this.kjfp,
                                            "chqattach":cq[this.chqattach],
                                            "sfdy":this.Sfdy,
                                            "chqsort":cqz[this.chqsort],
                                            "sfyj":this.sfyj,
                                            "year":this.year,
                                            "sfgszc":this.sfgszc,
                                            "qctime":this.qctime,
                                            "sfba":this.sfba,
                                            "batime":this.batime,
                                            "hzyx":hz[this.hzyx],
                                            "fpbatime":this.kpsj,
                                            "wtsort":level[this.wtsort],
                                            "cookie":user22.sjs
                                        }
                                    }
                                ).then(function (res) {
                                    Indicator.close();
                                    var result = JSON.parse(res.bodyText);
                                    if (result.success) {
                                        Toast({
                                            message: '保存成功',
                                            position: 'bottom',
                                            duration: 1000
                                        });

                                        setTimeout(function(){
                                            _this.$router.push({path: '/yixing_genjin'});
                                            // _this.$router.push({path:'/index'});
                                        },1000);
                                    } else {
                                        //this.$Message.error(res.message);
                                        Toast({
                                            message: '保存失败: ' + result.message,
                                            position: 'bottom'
                                        });
                                    }
                                }, function (res) {
                                    //this.$Message.error('保存失败');
                                    Toast({
                                        message: '保存失败! 请稍候再试',
                                        position: 'bottom'
                                    });
                                });

                                /*setTimeout(function(){
                                 history.go(-1);
                                 // _this.$router.push({path:'/index'});
                                 },1000);*/
                            } else {
                                //this.$Message.error(res.message);
                                Toast({
                                    message: '保存失败: ' + result.message,
                                    position: 'bottom'
                                });
                            }
                        }, function (res) {
                            //this.$Message.error('保存失败');
                            Toast({
                                message: '保存失败! 请稍候再试',
                                position: 'bottom'
                            });
                        });
                    }

                }
                }
        },
        mounted(){
            this.tebqqxpd();
            this.getXgbq();
            $('title').html("跟进工单");
            //获取手机是ios还是Android
            if(/android/i.test(navigator.userAgent)){
                $(".anzhif").focus(function(){
                    $(".bottom").css({
                        'display':'none'
                    });
                    $(".zhongjian").css({
                        'bottom':'0'
                    });
                    asd();
                });
                $(".anzhif").blur(function(){
                    $(".bottom").css({
                        'display':'block'
                    });
                    $(".zhongjian").css({
                        'bottom':'1.2rem'
                    });
                });
                //alert("This is Android'browser.");//这是Android平台下浏览器
            }
            if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
                //alert("This is iOS'browser.");//这是iOS平台下浏览器
            }

            //监听手机端软键盘显示和不显示
            function asd() {
                var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                $(window).on('resize', function () {
                    var nowClientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                    if (clientHeight > nowClientHeight) {
                        $(".bottom").css({
                            'display':'none'
                        });
                        $(".zhongjian").css({
                            'bottom':'0'
                        });
                    }
                    else {
                        $(".bottom").css({
                            'display':'block'
                        });
                        $(".zhongjian").css({
                            'bottom':'1.2rem'
                        });
                    }
                });
            }

        },
    }
</script>
