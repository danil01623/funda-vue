<template>
    <div class="row">
        <div class="characteristics-text">
            <h2>Characteristics</h2>
        </div>
        <div class="characteristics-list">
            <div class="bouw">
                <table style="width:100%">
                    <thead>
                        <tr>
                            <th scope="col">{{construction.Titel}}</th>
                            <th scope="col">Characteristic</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(entry, i) in construction.Kenmerken" :key="i">
                            <td>{{ entry.Naam }}</td>
                            <td>{{ entry.Waarde }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="surfaces">
                <table style="width:100%">
                    <thead>
                        <tr>
                            <th scope="col">{{surface.Titel}}</th>
                            <th scope="col">Characteristic</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(entry, i) in surface.Kenmerken" :key="i">
                            <td>{{ entry.Naam }}</td>
                            <p v-html="entry.Waarde"></p>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="layout">
                <table style="width:100%">
                    <thead>
                        <tr>
                            <th scope="col">{{layout.Titel}}</th>
                            <th scope="col">Characteristic</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(entry, i) in layout.Kenmerken" :key="i">
                            <td>{{ entry.Naam }}</td>
                            <p v-html="entry.Waarde"></p>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="energy">
                <table style="width:100%">
                    <thead>
                        <tr>
                            <th scope="col">{{energy.Titel}}</th>
                            <th scope="col">Characteristic</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(entry, i) in energy.Kenmerken" :key="i">
                            <td>{{ entry.Naam }}</td>
                            <p v-html="entry.Waarde"></p>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PropertyCharacteristics',
    props: {
        characteristics: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            construction: this.characteristics[1],
            surface: this.characteristics[2],
            layout: this.characteristics[3],
            energy: this.characteristics[4]
        }
    }
}
</script>

<style scoped>
    .characteristics-text {
        text-align: left;
    }
    .characteristics-text h2{
        text-decoration: underline;
    }
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        margin-top: 20px;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        font-weight: 800;
    }
    tr:nth-child(even) {
        background-color: #dddddd;
    }
</style>