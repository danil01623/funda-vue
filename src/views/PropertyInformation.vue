<template>
    <div class="information-container">
        <div class="basic-information">
            <basic-property-info
                :address="propertyData.Adres"
                :postcode="propertyData.Postcode"
                :city="propertyData.Plaats"
                :price="propertyData.PrijsGeformatteerd"
                :features="propertyData.KenmerkenKort"
                :rooms="propertyData.AantalKamers"
                :broker="propertyData.Makelaar"
                :broker-tel="propertyData.MakelaarTelefoon"
            ></basic-property-info>
        </div>
        <div class="description">
            <property-description
                :description="propertyData.VolledigeOmschrijving"
            ></property-description>
        </div>
        <div class="characteristics">
            <property-characteristics
                :characteristics="propertyData.Kenmerken"
            ></property-characteristics>
        </div>
    </div>
</template>

<script>
    import BasicPropertyInfo from '../components/BasicPropertyInfo'
    import PropertyDescription from '../components/PropertyDescription'
    import PropertyCharacteristics from '../components/PropertyCharacteristics'

    export default {
        name: 'PropertyInformation',
        components: {
            BasicPropertyInfo,
            PropertyDescription,
            PropertyCharacteristics
        },
        props: {
            propertyData: {
                type: Object,
                required: false
            }
        }
    }
</script>

<style scoped>
.information-container {
    width: 100%;
    height: 100%;
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
}
.basic-information,
.characteristics {
    width: 100%;
}
</style>