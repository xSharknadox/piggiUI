<template>
    <div class="freezerTabs">
        <v-tabs
                v-model="tab"
                grow
                background-color="#041c16"
                dark
        >
            <v-tab href="#have">
                Have
            </v-tab>
            <v-tab href="#need">
                Need
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item :key="1" :value="'have'">
                <HaveProductsList></HaveProductsList>
            </v-tab-item>
            <v-tab-item :key="2" :value="'need'">
                <NeedProductsList></NeedProductsList>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
    import HaveProductsList from '@/components/freezer/HaveProductsList'
    import NeedProductsList from '@/components/freezer/NeedProductsList'


    export default {
        name: 'FreezerTabs',
        components: {
            HaveProductsList, NeedProductsList
        },
        data() {
            return {
                tab: null,
            }
        }

    }
</script>
