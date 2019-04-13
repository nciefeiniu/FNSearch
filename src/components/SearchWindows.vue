<template>
    <div id="searchbox">
        <el-input placeholder="请输入内容" v-model.lazy="keyword" @keyup.enter.native="search" clearable autofocus class="input-with-select">
            <el-button @click="search" slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
</template>
<script>
export default {
    name: 'searchwindows',
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        search() {
            if (this.keyword === '' || this.keyword === undefined || this.keyword === null) {
                this.$message('搜索关键字不能为空。');
                return
            }
            this.$router.push({ path: "/search", query: { keyword: this.keyword } })
        }
    },
    mounted() {
        const queries = this.$route.query
        if (queries.hasOwnProperty('keyword')) {
            this.keyword = queries.keyword
        }
    }
};
</script>
<style scoped>
.el-select .el-input {
    width: 130px;
}
.input-with-select .el-input-group__prepend {
    background-color: #fff;
}
#searchbox {
    width: 45%;
    max-width: 1200px;
    padding-bottom: 10%;
}
</style>
