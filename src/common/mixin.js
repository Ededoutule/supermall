import BackTop from "components/content/backTop/BackTop";

export const Mixins = {
    data() {
        return {

        }
    },
    mounted() {},
    components: {

    }
}

export const backTopMixins = {
    data() {
        return {
            isShowBackTop: false, // 组件BackTop的显示
        }
    },
    mounted() {

    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0, 500);
        },
        listenShowBackTop(position) {
            this.isShowBackTop = -position.y > 1000;
        }
    },
    components: {
        BackTop
    }
}