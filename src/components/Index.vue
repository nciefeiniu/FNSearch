<template>
    <el-container style="height: 100%;">
        <el-header style="height: 40px;">
            <LocalHeaders />
        </el-header>
        <el-main class="search-center">
            <search-windows style="padding-bottom: 10%;"/>
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

export default {
    name: "index",
    components: {
        SearchWindows,
        CopyRight,
        LocalHeaders
    },
    data() {
        return {};
    }
};
</script>
<style scoped>
.search-center{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
