<template>
    <div>
        <el-card v-for="(item, index) in searchDatas" :key="index" class="box-card" body-style={}>

            <div slot="header" class="clearfix">
                <a :href="item.url"><span>{{ item.title }}</span></a>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div class="text"><a :href="item.url">{{ item.url }}</a></div>
            <div class="text item">
                {{ item.content }}
            </div>

        </el-card>

        <el-pagination layout="prev, pager, next" :total=dataNum style="margin-top: 30px;">
        </el-pagination>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dataNum: 0,
            searchDatas: [
                {
                    title: '测试1',
                    url: 'http://test.com',
                    content: '测试数据。。。。。'
                },
                {
                    title: '测试2',
                    url: 'http://test.com',
                    content: '测试数据。。。。。'
                },
                {
                    title: '测试3',
                    url: 'http://test.com',
                    content: '测试数据。。。。。'
                }
            ],
            loading: null
        }
    },

    watch: {
        "$store.state.showLoading": function () {
            if (this.$store.state.showLoading === false) {
                return
            }
            this.openFullScreen2()
            // 下面是ajax 请求数据

            const queries = this.$route.query
            let keyword

            if (queries.hasOwnProperty('keyword')) {
                keyword = queries.keyword
            } else {
                return
            }

            if (keyword === '' || keyword === undefined || keyword === null) {
                return
            }

            console.log(keyword)
            this.getDatas(keyword)

            // 请求完成后关闭loading
            this.loading.close()
            // 设置vuex为false状态
            this.settingVUEX()
        }
    },

    mounted() {
        this.openFullScreen2()
        console.log('mounted')

        const queries = this.$route.query
        let keyword

        if (queries.hasOwnProperty('keyword')) {
            keyword = queries.keyword
        } else {
            return
        }

        if (keyword === '' || keyword === undefined || keyword === null) {
            return
        }

        this.getDatas(keyword)

        // 设置vuex为false状态
        this.settingVUEX()
        this.loading.close()
    },

    methods: {
        getDatas(kw) {
            if (keyword === '' || keyword === undefined || keyword === null) {
                return
            }
            // axios 请求API
             
        },

        settingVUEX() {
            this.$store.dispatch('hideLoading')
        },

        openFullScreen2() {
            this.loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
                this.loading.close();
            }, 15000);
        }
    }
}
</script>
<style scoped>
.text {
    font-size: 12px;
}

.item {
    padding: 18px 0;
}

.box-card {
    width: 57%;
    max-width: 2000px;
    margin-top: 15px;
}
</style>
