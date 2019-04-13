<template>
    <el-container style="height: 100%;">
        <el-main class="search-top">
            <search-windows />
            <result-list />
        </el-main>
        <el-footer style="height: 40px;">
            <copy-right />
        </el-footer>
    </el-container>
</template>
<script>
import SearchWindows from './SearchWindows.vue';
import CopyRight from './CopyRight.vue';
import LocalHeaders from './LocalHeaders.vue'
import ResultList from './ResultList.vue'

export default {
    name: 'search',
    components: {
        SearchWindows,
        CopyRight,
        LocalHeaders,
        ResultList
    },
    data () {
        return {
            
        }
    }
}
</script>
<style scoped>
.search-top{
    margin-top: 10px;
}
</style>
