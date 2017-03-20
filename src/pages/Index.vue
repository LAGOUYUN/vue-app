<template>
    <div>
        <div class="header">
            <Avatar width="130" url="../../static/img/avatar.png"></Avatar>
            <h1 class="user-name">四到五</h1>
            <p class="greeting">10月25日，今天是你在公司的第364天</p>
        </div>
        <div class="company">
            <Cell title="我的公司" :isLink = "true" >
                <img class='company-icon' src="../../static/img/company.svg" slot="icon"/>
                <Selector
                    class='company-selector'
                    slot="value"
                    :options="['拉勾网','四吉移动','测试测试']"
                    value="拉勾网"
                    placeholder='请选择'>
                </Selector>
            </Cell>
            <Grid class='grids-middle'>
                <GridItem icon="../../static/img/icon-approval@2x.png" link='#/approavl' label="待我审批"></GridItem>
                <GridItem icon="../../static/img/icon-sign@2x.png" link='#/approavl' label="我要打卡"></GridItem>
                <GridItem icon="../../static/img/icon-leave@2x.png" link='#/approavl' label="我要请假"></GridItem>
            </Grid>
        </div>
        <Grid class='grids-bottom'>

            <GridItem icon="../../static/img/icon-file@2x.png" link='/detail' label="我的档案">
                <span class="label-des" slot='labelDes'>人力资源部/刑新政部</span>
            </GridItem>
            <GridItem icon="../../static/img/icon-canlander@2x.png" link='#/approavl' label="工作日历">
                <span class="label-des" slot='labelDes'>今天是工作日</span>
            </GridItem>

            <GridItem icon="../../static/img/icon-attendance@2x.png" link='#/approavl' label="考勤记录">
                <span class="label-des" slot='labelDes'>本月异常16次</span>
            </GridItem>
            <GridItem icon="../../static/img/icon-my-approval@2x.png" link='#/approavl' label="我的审批">
                <span class="label-des" slot='labelDes'>8条审批</span>
            </GridItem>


            <GridItem icon="../../static/img/icon-vacation@2x.png" link='#/approavl' label="休假记录">
                <span class="label-des" slot='labelDes'>本月已休假8天</span>
            </GridItem>
            <GridItem icon="../../static/img/icon-overtime@2x.png" link='#/approavl' label="加班记录">
                <span class="label-des" slot='labelDes'>本月已加班2天</span>
            </GridItem>

            <GridItem icon="../../static/img/icon-easy-logo@2x.png" link='#/approavl' label="简招">
                <span class="label-des" slot='labelDes'>筛选职位、管理简历</span>
            </GridItem>
            <GridItem icon="../../static/img/icon-roll@2x.png" link='#/approavl' label="工资条">
                <a  class='label-des link' href="#" slot='labelDes'>点击查看详情</a>
            </GridItem>

        </Grid>
    </div>
</template>


<script>
import Avatar from '../components/avatar';
import Cell from '../components/cell';
import Selector from '../components/selector';
import { Grid,GridItem } from '../components/grid';


export default {
    name: 'index',
    data() {
        return {

        }
    },
    components: {
        Avatar,
        Cell,
        Selector,
        Grid,
        GridItem
    }
}
</script>

<style lang="less">
@import "./index";
</style>
