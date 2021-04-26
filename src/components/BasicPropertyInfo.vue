<template>
    <!-- Modal with contact form -->
    <generic-modal v-if="modalOpen" :title="broker" @close="closeModal">
        <template v-slot:default>
            <form>
                <div class="form-control">
                    <label for="first-name">First Name</label>
                    <input id="first-name" name="first-name" type="text" v-model="firstName" />
                </div>
                <div class="form-control">
                    <label for="last-name">Last Name</label>
                    <input id="last-name" name="last-name" type="text" v-model="lastName" />
                </div>
                <div class="form-control">
                    <label for="phone">Phone</label>
                    <input id="phone" name="phone" type="text" v-model="phone" />
                </div>
                <div class="form-control">
                    <label for="email">Email</label>
                    <input id="email" name="email" type="email" v-model="email" @blur="validateInput" />
                    <p v-if="isValid === 'invalid'" class="invalid-msg">Email is a mandatory field!</p>
                </div>
                <div class="form-control">
                    <label for="reason">Reason to contact</label>
                    <select id="reason" name="reason" v-model="reason">
                        <option value="viewing">Plan a viewing</option>
                        <option value="more-information">Ask for more information</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="comments">Comments</label>
                    <textarea id="comments" name="comments" v-model="comments" />
                </div>
            </form>
            <div class="phone-num">
                <p>You want to call us? <b>{{ brokerTel }}</b></p>
            </div>
        </template>
        <template v-slot:actions>
            <button class="form-button" @click="submitForm">Send request</button>
            <button class="form-cancel-button" @click="closeModal">Close</button>
        </template>
    </generic-modal>
    
    <!-- Showing basic info -->
    <div class="row">
        <div class="info">
            <div class="address-header">
                <h1>{{address}}</h1>
            </div>
            <div class="sub-address-header">
                <h4>{{ address }}, {{ city }}, {{ postcode }}</h4>
            </div>
            <div class="information">
                Price:<span class="bold" v-html="price"></span>,
                Rooms: <span class="bold">{{ rooms }}</span>,
                Living Area: <span class="bold" v-html="livingArea"></span>
            </div>
        </div>
        <div class="broker">
            <button class="button" @click="showModal">Ask the agent</button>
        </div>
    </div>
</template>

<script>
import GenericModal from './GenericModal'

export default {
    name: 'BasicPropertyInfo',
    components: {
        GenericModal
    },
    props: {
        address: {
            type: String,
            required: true
        },
        postcode: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        features: {
            type: Object,
            required: true
        },
        rooms: {
            type: Number,
            required: true
        },
        broker: {
            type: String,
            required: true
        },
        brokerTel: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            livingArea: '',
            modalOpen: false,
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            comments: '',
            reason: 'viewing',
            isValid: ''
        }
    },
    methods: {
        // get living area
        findLivingArea() {
            this.features.Kenmerken.forEach((feature) => {
                if (feature.Naam === "Woonoppervlakte") {
                    this.livingArea = feature.Waarde
                }
            })
        },
        showModal() {
            this.modalOpen = true
        },
        closeModal() {
            this.modalOpen = false
        },
        submitForm() {
            // send post request to submit the form and then clear data properties and close modal
            this.firstName = ''
            this.lastName = '',
            this.phone = '',
            this.email = '',
            this.comments = '',
            this.reason = 'viewing'
            this.modalOpen = false
        },
        // small validation for email of the form
        validateInput() {
            if (this.email === '') {
                this.isValid = 'invalid';
            } else {
                this.isValid = 'valid';
            }
        }
    },
    created() {
        this.findLivingArea()
    }
}
</script>

<style scoped>
    .info {
        float: left;
        width: 70%;
    }
    .address-header,
    .sub-address-header {
        align-items: center;
    }
    .address-header h1 {
        margin-bottom: -10px;
    }
    .sub-address-header {
        color: #4c4c4c;
    }
    .bold {
        font-weight: 800;
    }
    .broker {
        float: left;
        width: 30%
    }
    .button {
        background-color: #272E32;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 26px 2px;
        cursor: pointer;
    }
    form {
        margin: 2rem auto;
        max-width: 40rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 2rem;
        background-color: #ffffff;
    }

    .form-control {
        margin: 0.5rem 0;
    }
    .invalid-msg {
        color: red;
    }
    label {
        font-weight: bold;
    }

    input,
    select,
    textarea {
        display: block;
        width: 100%;
        font: inherit;
        margin-top: 0.5rem;
    }

    .form-button,
    .form-cancel-button {
        border-color: rgb(0, 106, 255);
        color: rgb(255, 255, 255);
        font: inherit;
        cursor: pointer;
        padding: 0.75rem 2rem;
        border-radius: 5px;
        margin: 10px;
    }
    .form-button {
        background-color: rgb(0, 106, 255);
        border-color: rgb(0, 106, 255);
    }
    .form-cancel-button {
        background-color: red;
        border-color: red;
    }
    button:hover,
    button:active {
        border-color: #002350;
        background-color: #002350;
    }

    @media (max-width: 900px) {
        .info,
        .broker {
            width: 100%;
    }
}
</style>