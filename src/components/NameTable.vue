<template>
  <div>
    <!-- Singular Systems Logo -->
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <div class="d-flex justify-center mx-4">
            <v-img
              :src="require('../assets/SSLogo.png')"
              class="my-3"
              contain
              height="200"
              width="250"
            />
          </div>
        </v-col>
        <v-col class="primary">
          <h1 class="display-2 font-weight-bold mb-3 pt-3">Database</h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <!-- ======================================================  -->
          <v-data-table :headers="state.headers" :items="employeeList">
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Employees</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="state.dialog" max-width="500px">
                  <v-card>
                    <!-- <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title> -->

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="state.editedItem.name"
                              label="Name"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="state.editedItem.email"
                              label="Email"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="state.editedItem.phone"
                              label="Phone Number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-autocomplete
                              :items="state.foodItems"
                              v-model="state.editedItem.choice"
                              label="Choice"
                            ></v-autocomplete>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close">
                        Cancel
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="save">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="state.dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="text-h5"
                      >Are you sure you want to delete this item?</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete"
                        >Cancel</v-btn
                      >
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="deleteItemConfirm"
                        >OK</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
            </template>
          </v-data-table>
          <!-- ========================================== -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { employeeStore } from "@/vueStore/employees";
import { storeToRefs } from "pinia";
import { onMounted, reactive, nextTick } from "vue";
const { getAllEmployees, editEmployeesDetails, deleteEmployeesDetails } =
  employeeStore();
const { employeeList } = storeToRefs(employeeStore());
onMounted(() => {
  getAllEmployees();
});
// ============================
const state = reactive({
  foodItems: [
    "Beef Burger",
    "Chicken Burger",
    "Vegan Burger",
    "Chicken Nuggets",
    "Pizza",
    "Half Chicken",
    "Ceasar Salad",
    "Pancakes",
    "Plate of Chips",
    "Curry and Rice",
  ],
  dialog: false,
  dialogDelete: false,
  headers: [
    {
      text: "Name",
      align: "start",
      value: "name",
    },
    { text: "Email", value: "email" },
    { text: "Phone Number", value: "phone" },
    { text: "Choice", value: "choice" },
    { text: "Actions", value: "actions", sortable: false },
  ],
  editedIndex: -1,
  editedItem: {
    name: "",
    email: "",
    phone: "",
    choice: "",
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
});

const editItem = (item) => {
  state.editedIndex = employeeList.value?.indexOf(item);
  state.editedItem = Object.assign({}, item);
  state.dialog = true;
};

const deleteItem = (item) => {
  state.editedIndex = employeeList.value?.indexOf(item);
  state.editedItem = Object.assign({}, item);
  state.dialogDelete = true;
};

const deleteItemConfirm = () => {
  employeeList.value?.splice(state.editedIndex, 1);
  deleteEmployeesDetails(state.editedItem.email);
  closeDelete();
};

const close = () => {
  state.dialog = false;
  nextTick(() => {
    state.editedItem = Object.assign({}, state.defaultItem);
    state.editedIndex = -1;
  });
};

const closeDelete = () => {
  state.dialogDelete = false;
  nextTick(() => {
    state.editedItem = Object.assign({}, state.defaultItem);
    state.editedIndex = -1;
  });
};

const save = () => {
  editEmployeesDetails(state.editedItem);
  close();
};
</script>
