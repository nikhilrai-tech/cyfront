<template>
  <div>
    <v-row class="my-4c">

      <v-col cols="12" sm="4" md="3">
        <v-row>
        <v-col cols="12">
        <v-card >
          <v-card-title class="headlinec">
              Overview 
          </v-card-title>
            <v-list-item-content align="center">
              <v-list-item-title>{{details.email}}</v-list-item-title>
              <v-list-item-subtitle>@{{details.username}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item>
            <v-list-item-content align="center">
              <v-list-item-title>{{$auth.user.is_company ? details.hactivity.length : details.likesc}}</v-list-item-title>
              <v-list-item-subtitle>{{$auth.user.is_company ? 'Programs' : 'Likes'}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content align="center">
              <v-list-item-title>{{details.reports}}</v-list-item-title>
              <v-list-item-subtitle>Reports</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content align="center">
              <v-list-item-title>{{details.visits}}</v-list-item-title>
              <v-list-item-subtitle>Visits</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
          <v-card-actions v-if="!$auth.user.is_staff" class="py-c">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{details.refcode}}</v-list-item-title>
                <v-list-item-subtitle>is your Referral Code</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar>
                <!-- v-btn<v-icon small>mdi-share</v-icon> -->
                
                <v-menu bottom offset-y >
                  <template #activator="{ on, attrs }">
                    <v-btn rounded icon style="z-index: 4;"  v-bind="attrs" v-on="on"><v-icon>mdi-share</v-icon></v-btn>
                  </template>

                  <v-list>

                    <v-list-item :key="1" dense @click="share(details.refcode, 0)">
                      <v-list-item-icon style="min-width: 0px;"><v-icon small>mdi-whatsapp</v-icon> </v-list-item-icon>
                      <v-list-item-title>Whatsapp</v-list-item-title>
                    </v-list-item>

                    <v-list-item :key="2" dense @click="share(details.refcode, 1)">
                      <v-list-item-icon style="min-width: 0px;"><v-icon small>mdi-gmail</v-icon> </v-list-item-icon>
                      <v-list-item-title>Gmail</v-list-item-title>
                    </v-list-item>

                    <v-list-item :key="3" dense @click="share(details.refcode, 2)">
                      <v-list-item-icon style="min-width: 0px;"><v-icon small>mdi-twitter</v-icon> </v-list-item-icon>
                      <v-list-item-title>Twitter</v-list-item-title>
                    </v-list-item>

                    <v-list-item :key="4" dense @click="share(details.refcode, 3)">
                      <v-list-item-icon style="min-width: 0px;"><v-icon small>mdi-facebook</v-icon> </v-list-item-icon>
                      <v-list-item-title>Facebook</v-list-item-title>
                    </v-list-item>

                  </v-list>
                </v-menu>

              </v-list-item-avatar>
            </v-list-item>
          </v-card-actions>
        </v-card>
        </v-col>
        
        <v-col cols="12">
        <v-card >
          <v-card-title class="headlinec">
              {{$auth.user.is_company ? 'Company Logo': 'Picture'}}
              <v-spacer />
              <v-btn small icon class="ml-2" @click="$refs.propic.click()"><v-icon small>mdi-pencil</v-icon></v-btn>
              <v-btn v-if="details.photo" small icon class="ml-2" @click="deletepro"><v-icon small>mdi-delete</v-icon></v-btn>
          </v-card-title>
          <input id="propic" ref="propic" type="file" name="propic" accept="image/*" hidden @change="editpropic">
            <v-list-item-content align="center">
              <!-- <v-avatar size="150" class="d-inline-block avatar-company py-5"> -->
                <div :class="`avatar avatar-${details.atype} py-5`">
                  <img v-if="details.photo" :src="details.photo" :alt="details.name" width="100" height="100" class="rounded-circle" >
                  <v-icon v-else size="100" class="rounded-circle"> mdi-account-circle </v-icon>
                </div>
              <!-- </v-avatar> -->
            </v-list-item-content>
          <v-card-actions class="py-5c">
          </v-card-actions>
        </v-card>
        </v-col>
        
        
        <v-col cols="12">
        <form @submit.prevent="savedetails">
        <v-card >
          <v-card-title class="headlinec">
              Details
          </v-card-title>
          <v-list-item>
            <v-list-item-content class="px-4 mt-2">
              <v-textarea v-model="details.bio" auto-grow outlined rows="1" row-height="15"  :label="`${$auth.user.is_company ? 'Slogan': 'Bio'}`" />
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="px-4">
              <v-text-field v-model="details.name" outlined :label="`${$auth.user.is_company ? 'Company': 'Full'} Name`" hide-details />
            </v-list-item-content>
          </v-list-item>
          <v-card-actions class="py-5">
              <v-spacer />
              <v-btn color="primary" type="submit">Save</v-btn>
              <v-spacer />
          </v-card-actions>
        </v-card>
        </form>
        </v-col>



        </v-row>
      </v-col>



      <v-col cols="12" sm="8" md="9">
        <v-row>
          <v-col v-if="($auth.user.is_company && $auth.user.is_staff)" cols="12" sm="6" md="4">
            <v-card class="d-flex">
              <v-card-text>
                  <v-list-item-subtitle class="mb-2">Attached</v-list-item-subtitle>
                  <v-list-item-title style="font-size: 22px;" class="mb-4c">Staff</v-list-item-title>
              </v-card-text>
              <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{details.refreputation}}</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col v-if="($auth.user.is_company && $auth.user.is_staff)" cols="12" sm="6" md="4">
            <v-card class="d-flex">
              <v-card-text>
                  <v-list-item-subtitle class="mb-2">Total</v-list-item-subtitle>
                  <v-list-item-title style="font-size: 22px;" class="mb-4c">Programs</v-list-item-title>
              </v-card-text>
              <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{details.hactivity ? details.hactivity.length : 0}}</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col v-if="($auth.user.is_company && $auth.user.is_staff)" cols="12" sm="6" md="4">
            <v-card class="d-flex">
              <v-card-text>
                  <v-list-item-subtitle class="mb-2">Total</v-list-item-subtitle>
                  <v-list-item-title style="font-size: 22px;" class="mb-4c">Reports</v-list-item-title>
              </v-card-text>
              <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{details.upvotereputation}}</v-card-subtitle>
            </v-card>
          </v-col>


          
          <v-col v-if="(!$auth.user.is_company && !$auth.user.is_staff)" cols="12" sm="6" md="4">
            <v-card class="d-flex">
              <v-card-text>
                  <v-list-item-subtitle class="mb-2">Referred</v-list-item-subtitle>
                  <v-list-item-title style="font-size: 22px;" class="mb-4c">Users</v-list-item-title>
              </v-card-text>
              <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{details.refreputation}}</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col v-if="(!$auth.user.is_company && !$auth.user.is_staff)" cols="12" sm="6" md="4">
            <v-card class="d-flex">
              <v-card-text>
                  <v-list-item-subtitle class="mb-2">Total</v-list-item-subtitle>
                  <v-list-item-title style="font-size: 22px;" class="mb-4c">Reputation</v-list-item-title>
              </v-card-text>
              <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{details.totalreputation}}</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col v-if="(!$auth.user.is_company && !$auth.user.is_staff)" cols="12" sm="6" md="4">
            <v-card class="d-flex">
              <v-card-text>
                  <v-list-item-subtitle class="mb-2">Upvote</v-list-item-subtitle>
                  <v-list-item-title style="font-size: 22px;" class="mb-4c">Reputation</v-list-item-title>
              </v-card-text>
              <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{details.upvotereputation}}</v-card-subtitle>
            </v-card>
          </v-col>



          <v-col v-if="$auth.user.is_company" cols="12" sm="6" md="8">
            <v-card >
              <v-card-title class="headlinec">
                  Programs
              </v-card-title>

              <v-list-item v-if="details.hactivity ? details.hactivity.length < 1 : false">
                <v-list-item-avatar>
                    <v-icon color="success"> mdi-bug </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>No Programs Found </v-list-item-title>
                  <v-list-item-subtitle>You haven't added any programs yet</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <div v-else class="custom-card-body" style="max-height: 300px; overflow-y: scroll">
                <v-list-item v-for="(program, i) in details.hactivity" :key="i" >
                  <v-list-item-avatar>
                      <v-icon > mdi-note-outline </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{program.title}} - #{{program.type}}</v-list-item-title>
                    <v-list-item-subtitle>₹ {{program.lowreward}} - ₹ {{program.criticreward}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-avatar>
                      <a target="_blank" :href="'/p/?'+program.title"><v-icon color="grey" small> mdi-open-in-new </v-icon></a>
                  </v-list-item-avatar>
                </v-list-item>
              </div>
              

              <v-card-actions class="py-5c">
              </v-card-actions>
            </v-card>
          </v-col>


          <v-col v-else cols="12" sm="6" md="4">
            <v-card >
              <v-card-title class="headlinec">
                  Hacktivity
              </v-card-title>

              <v-list-item v-if="details.hactivity ? details.hactivity.length < 1 : false">
                <v-list-item-avatar>
                    <v-icon color="success"> mdi-bug </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>No Reports Found </v-list-item-title>
                  <v-list-item-subtitle>You haven't added any reports yet</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <div v-else class="custom-card-body" style="max-height: 300px; overflow-y: scroll">

              <v-list-item v-for="(hack, index) in details.hactivity" :key="index">
                <v-list-item-avatar>
                    <v-icon color="success"> mdi-bug </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{hack.title}}</v-list-item-title>
                  <v-list-item-subtitle>{{hack.posted }} ago</v-list-item-subtitle>
                </v-list-item-content>
                  <v-list-item-avatar>
                      <a target="_blank" :href="`/inbox?report=${hack.id}`"><v-icon color="grey" small> mdi-open-in-new </v-icon></a>
                  </v-list-item-avatar>
              </v-list-item>

                <!-- <v-list-item>
                  <v-list-item-avatar>
                      <v-icon color="info"> mdi-arrow-up </v-icon>1
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Bug Bounty Program</v-list-item-title>
                    <v-list-item-subtitle><a target="_blank" style="color: inherit;" href="https://github.com/vivekkumarbilla">@redis</a></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-avatar>
                      <a target="_blank" href="https://github.com/vivekkumarbilla"><v-icon color="grey" small> mdi-open-in-new </v-icon></a>
                  </v-list-item-avatar>
                </v-list-item> -->
              </div>
              

              <v-card-actions class="py-5c">
              </v-card-actions>
            </v-card>
          </v-col>



















          <v-col cols="12" sm="6" md="4">
            <v-card >
              <v-card-title class="headlinec d-flex justify-space-between">
                  Bounties
                  <div v-if="!details.fund_account"><v-btn icon @click="addfunding = true"><v-icon> mdi-plus</v-icon></v-btn></div>
                  <div v-else><v-btn v-if="details.bounties.length > 0" icon @click="showbounty = true"><v-icon> mdi-information-outline</v-icon></v-btn></div>
              </v-card-title>


              <v-list-item v-if="details.bounties ? details.bounties.length < 1 : false">
                <v-list-item-avatar>
                    <v-icon color="warning"> mdi-currency-inr </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>No Bounties Found </v-list-item-title>
                  <v-list-item-subtitle>You haven't {{$auth.user.is_staff ? 'sent' : 'received'}} any bounties yet</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>


              <div v-else class="custom-card-body" style="max-height: 300px; overflow-y: scroll">
                <v-list-item v-for="(bounty, index) in details.bounties" :key="index">
                  <v-list-item-avatar>
                    <img v-if="bounty.user.photo" :src="$axios.defaults.baseURL+bounty.user.photo" :alt="bounty.user.name" >
                    <v-icon v-else dark large> mdi-account-circle </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{bounty.user.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{$moment(bounty.date).fromNow()}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-avatar>
                    ₹{{bounty.amount}}
                  </v-list-item-avatar>
                </v-list-item>

              </div>


              <v-card-actions class="py-5c">
              </v-card-actions>
            </v-card>
          </v-col>



            <v-dialog v-model="showbounty" width="400">
              <!-- <form @submit.prevent="claimbounty"> -->
              <v-card :loading="loading">
                <v-card-title class="headlinec">
                    Bounties
                </v-card-title>
                <v-card-text v-if="details.fund_account">
                    <v-list-item>
                      <v-list-item-content style="flex: 2;">
                        <v-list-item-title>{{details.fund_account.name}} ({{details.fund_account.type}})</v-list-item-title>
                        <v-list-item-subtitle>{{details.fund_account.primary}}</v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-avatar>
                        <v-btn small icon><v-icon>mdi-pen</v-icon></v-btn>
                      </v-list-item-avatar>
                    </v-list-item>
                </v-card-text>
                <v-card-text v-else>
                  <v-sheet>
                    Please add Fund Account
                  </v-sheet>
                </v-card-text>
                <v-list-item v-for="(bounty, index) in details.bounties" :key="index">
                  <v-list-item-avatar>
                    <img v-if="bounty.user.photo" :src="$axios.defaults.baseURL+bounty.user.photo" :alt="bounty.user.name" >
                    <v-icon v-else dark large> mdi-account-circle </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content style="flex: 2;">
                    <v-list-item-title>{{bounty.user.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{$moment(bounty.date).fromNow()}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-content v-if="$auth.user.is_staff">
                    <v-chip small class="justify-center" :color="get_color(bounty.status)">{{bounty.status}}</v-chip>
                  </v-list-item-content>
                  <v-list-item-content v-else>
                    <v-btn v-if="bounty.status == 'To be Claimed'" outlined color="success" @click="claimbountyreal(bounty.id, bounty.amount)">Claim ₹{{bounty.amount}}</v-btn>
                    <v-btn v-else-if="bounty.status == 'Claimed'" disabled color="success" >Claimed ₹{{bounty.amount}}</v-btn>
                    <v-btn v-else-if="bounty.status == 'Requested'" disabled color="info" >Requested ₹{{bounty.amount}}</v-btn>
                    <v-btn v-else disabled color="error" >Invalid Bounty</v-btn>
                  </v-list-item-content>
                </v-list-item>
                <v-card-title class="headlinec">
                </v-card-title>
              </v-card>
            </v-dialog>




            <v-dialog v-model="addfunding" width="400">
              <v-card :loading="loading">
                <v-card-title class="headlinec">
                    Add Fund Account
                </v-card-title>
                <v-card-text>
                  <v-tabs v-model="funds.mode">
                    <v-tab :key="'upi'">UPI</v-tab>
                    <!-- <v-tab :key="'report'">Reports</v-tab> -->
                    <v-tab :key="'bank'">Bank</v-tab>
                    <!-- <v-tab :key="'staff'">Staff</v-tab> -->
                  </v-tabs>
                  <form class="pt-5 text-center" @submit.prevent="addfundaccount(funds.mode == 0 ? 'vpa': 'bank_account')">
                    <v-text-field v-model="funds.name" label="Account Name" outlined />
                    <div v-if="funds.mode == 0">
                        <v-text-field v-model="funds.upi" label="UPI Address" outlined />
                      <!-- </form> -->
                    </div>
                    <div v-if="funds.mode == 1">
                      <!-- <form class="pt-5 text-center" @submit.prevent="addfundaccount('bank_account')"> -->
                      <v-text-field v-model="funds.account" label="Account No" outlined />
                      <v-text-field v-model="funds.ifsc" label="IFSC Code" outlined />
                      
                    </div>
                    <v-btn color="success" type="submit" :disabled="loading">Add</v-btn>
                  </form>
                </v-card-text>
              </v-card>
            </v-dialog>























          <v-col v-if="$auth.user.is_company" cols="12" sm="6" md="4">
            <v-card >
              <v-card-title class="headlinec">
                  Thanks
              </v-card-title>


              <v-list-item v-if="details.thanks ? details.thanks.length < 1 : false">
                <v-list-item-avatar>
                    <v-icon color="warning"> mdi-handshake </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>No Thanks Found </v-list-item-title>
                  <v-list-item-subtitle>You haven't sent any thanks yet</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <div v-else class="custom-card-body" style="max-height: 300px; overflow-y: scroll">
                <v-list-item v-for="(thank, index) in details.thanks" :key="index">
                  <v-list-item-avatar>
                    <img v-if="thank.fro.photo" :src="thank.fro.photo" :alt="thank.fro.name" >
                    <v-icon v-else dark large> mdi-account-circle </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{thank.fro.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{$moment(thank.date).fromNow()}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-avatar>
                    {{thank.reputation}}
                  </v-list-item-avatar>
                </v-list-item>

              </div>


              <v-card-actions class="py-5c">
              </v-card-actions>
            </v-card>
          </v-col>






          <v-col v-else cols="12" sm="6" md="4">
            <v-card >
              <v-card-title class="headlinec">
                  Thanks
              </v-card-title>


              <v-list-item v-if="details.thanks ? details.thanks.length < 1 : false">
                <v-list-item-avatar>
                    <v-icon color="warning"> mdi-handshake </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>No Thanks Found </v-list-item-title>
                  <v-list-item-subtitle>You haven't received any thanks yet</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>


              <div v-else class="custom-card-body" style="max-height: 300px; overflow-y: scroll">
                <v-list-item v-for="(thank, index) in details.thanks" :key="index">
                  <v-list-item-avatar>
                    <img v-if="thank.fro.photo" :src="thank.fro.photo" :alt="thank.fro.name" >
                    <v-icon v-else dark large> mdi-account-circle </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{thank.fro.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{$moment(thank.date).fromNow()}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-avatar>
                    {{thank.reputation}}
                  </v-list-item-avatar>
                </v-list-item>

              </div>


              <v-card-actions class="py-5c">
              </v-card-actions>
            </v-card>
          </v-col>















          <v-col cols="12" sm="6" md="4">
            <v-card >
              <v-card-title class="headlinec">
                  Completion
              </v-card-title>
              <v-card-text class="profile-overview d-flex justify-center">
                <v-progress-circular
                      :rotate="-90"
                      :size="160"
                      :width="10"
                      :value="get_percentage()"
                      color="primary"
                    >
                      {{get_percentage()}}%
                    </v-progress-circular>
              </v-card-text>

              <v-card-actions class="py-4 d-flex justify-center">
                <v-btn outlined color="primary" @click="overview = true">Overview</v-btn>
              </v-card-actions>
              <v-dialog v-model="overview" width="350">
                
            <v-card >
              <v-card-title class="headlinec">
                  Profile Overview
              </v-card-title>

              <v-list-item>
                <v-list-item-avatar><v-icon> mdi-email </v-icon></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Email</v-list-item-title>
                  <v-progress-linear color="primary" :value="details.email ? 100 : 0"></v-progress-linear>
                </v-list-item-content>
                <v-list-item-avatar><v-icon :color="details.email ? 'success': 'error'" small> {{details.email ? 'mdi-check':'mdi-close' }}</v-icon></v-list-item-avatar>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar><v-icon > mdi-account </v-icon></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Full Name</v-list-item-title>
                  <v-progress-linear color="primary" :value="details.name ? 100 : 0"></v-progress-linear>
                </v-list-item-content>
                <v-list-item-avatar><v-icon :color="details.name ? 'success': 'error'" small> {{details.name ? 'mdi-check':'mdi-close' }}</v-icon></v-list-item-avatar>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar><v-icon> mdi-pen </v-icon></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{$auth.user.is_company ? 'Slogan': 'Bio'}}</v-list-item-title>
                  <v-progress-linear color="primary" :value="details.bio ? 100 : 0"></v-progress-linear>
                </v-list-item-content>
                <v-list-item-avatar><v-icon :color="details.bio ? 'success': 'error'" small> {{details.bio ? 'mdi-check':'mdi-close' }}</v-icon></v-list-item-avatar>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar><v-icon> mdi-image </v-icon></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{$auth.user.is_company ? 'Company Logo': 'Profile Picture'}}</v-list-item-title>
                  <v-progress-linear color="primary" :value="details.photo ? 100 : 0"></v-progress-linear>
                </v-list-item-content>
                <v-list-item-avatar><v-icon :color="details.photo ? 'success': 'error'" small> {{details.photo ? 'mdi-check':'mdi-close' }}</v-icon></v-list-item-avatar>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar><v-icon> mdi-lock </v-icon></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Verification</v-list-item-title>
                  <v-progress-linear color="primary" :value="100"></v-progress-linear>
                </v-list-item-content>
                <v-list-item-avatar><v-icon :color="'success'" small> mdi-check</v-icon></v-list-item-avatar>
              </v-list-item>
              

              <v-card-actions class="py-5c">
              </v-card-actions>
            </v-card>
              </v-dialog>
            </v-card>
          </v-col>


          <v-col cols="12" sm="6" md="4">
            <v-card >
              <v-card-title class="headlinec d-flex justify-space-between">
                  Linked
                  <v-btn icon @click="openlinked()"><v-icon> mdi-pencil</v-icon></v-btn>
              </v-card-title>

              <v-list-item >
                <v-list-item-avatar>
                    <v-icon color="blue"> mdi-facebook </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Facebook</v-list-item-title>
                  <v-list-item-subtitle v-if="details.facebook">
                    <a target="_blank" style="color: inherit;" :href="details.facebook">{{details.facebook}}</a>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-else>
                    <em>Not added</em>
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar>
                    <v-icon color="#F06292"> mdi-instagram </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Instagram</v-list-item-title>
                  <v-list-item-subtitle v-if="details.instagram">
                    <a target="_blank" style="color: inherit;" :href="details.instagram">{{details.instagram}}</a>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-else>
                    <em>Not added</em>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <!-- <v-list-item-avatar v-if="details.facebook">
                    <a target="_blank" :href="details.facebook"><v-icon color="grey" small> mdi-open-in-new </v-icon></a>
                </v-list-item-avatar> -->
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar>
                    <v-icon > mdi-github </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Github</v-list-item-title>
                  <v-list-item-subtitle v-if="details.github">
                    <a target="_blank" style="color: inherit;" :href="details.github">{{details.github}}</a>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-else>
                    <em>Not added</em>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar>
                    <v-icon color="grey"> mdi-web </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Website</v-list-item-title>
                  <v-list-item-subtitle v-if="details.website">
                    <a target="_blank" style="color: inherit;" :href="details.website">{{details.website}}</a>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-else>
                    <em>Not added</em>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <!-- <v-list-item-avatar v-if="details.github">
                    <a target="_blank" :href="details.github"><v-icon color="grey" small> mdi-open-in-new </v-icon></a>
                </v-list-item-avatar> -->
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar>
                    <v-icon color="primary"> mdi-twitter </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Twitter</v-list-item-title>
                  <v-list-item-subtitle v-if="details.twitter">
                    <a target="_blank" style="color: inherit;" :href="details.twitter">{{details.twitter}}</a>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-else>
                    <em>Not added</em>
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar>
                    <v-icon color="#0077b5"> mdi-linkedin </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>LinkedIn</v-list-item-title>
                  <v-list-item-subtitle v-if="details.linkedin">
                    <a target="_blank" style="color: inherit;" :href="details.linkedin">{{details.linkedin}}</a>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-else>
                    <em>Not added</em>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <!-- <v-list-item-avatar v-if="details.twitter">
                    <a target="_blank" :href="details.twitter"><v-icon color="grey" small> mdi-open-in-new </v-icon></a>
                </v-list-item-avatar> -->
              </v-list-item>

              <!-- <v-list-item>
                <v-list-item-avatar>
                    <v-icon color="#F06292"> mdi-instagram </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Instagram</v-list-item-title>
                  <v-list-item-subtitle v-if="details.instagram">
                    <a target="_blank" style="color: inherit;" :href="details.instagram">{{details.instagram}}</a>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-else>
                    <em>Not added</em>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar v-if="details.instagram">
                    <a target="_blank" :href="details.instagram"><v-icon color="grey" small> mdi-open-in-new </v-icon></a>
                </v-list-item-avatar>
              </v-list-item> -->

              <!-- <v-list-item> -->
                <!-- <v-list-item-avatar>
                    <v-icon color="grey"> mdi-web </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Website</v-list-item-title>
                  <v-list-item-subtitle v-if="details.website">
                    <a target="_blank" style="color: inherit;" :href="details.website">{{details.website}}</a>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-else>
                    <em>Not added</em>
                  </v-list-item-subtitle>
                </v-list-item-content> -->
                <!-- <v-list-item-avatar v-if="details.website">
                    <a target="_blank" :href="details.website"><v-icon color="grey" small> mdi-open-in-new </v-icon></a>
                </v-list-item-avatar> -->
              <!-- </v-list-item> -->
              

              <v-card-actions class="py-5c">
              </v-card-actions>
            </v-card>



            <v-dialog v-model="linked" width="400">
              <form @submit.prevent="editlinks">
              <v-card :loading="loading">
                <v-card-title class="headlinec">
                    Add/Edit Links
                </v-card-title>
              <v-card-text>
                <v-list-item>
                  <v-list-item-avatar>
                      <v-icon color="blue"> mdi-facebook </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-text-field v-model="links.facebook" label="Facebook Link" hide-details outlined color="blue" />
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-avatar>
                      <v-icon > mdi-github </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-text-field v-model="links.github" label="Github Link" hide-details outlined color="white" />
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-avatar>
                      <v-icon color="primary"> mdi-twitter </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-text-field v-model="links.twitter" label="Twitter Link" hide-details outlined />
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-avatar>
                      <v-icon color="#F06292"> mdi-instagram </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-text-field v-model="links.instagram" label="Instagram Link" hide-details outlined color="#F06292" />
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-avatar>
                      <v-icon color="grey"> mdi-web </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-text-field v-model="links.website" label="Website Link" hide-details outlined color="grey" />
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-avatar>
                      <v-icon color="#0077b5"> mdi-linkedin </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-text-field v-model="links.linkedin" label="LinkedIn Link" hide-details outlined color="grey" />
                  </v-list-item-content>
                </v-list-item>
                

              </v-card-text> 

                <v-card-actions class="py-4 d-flex justify-center">
                  <v-btn color="primary" type="submit" :disabled="loading">Save</v-btn>
                </v-card-actions>
              </v-card>
              </form>
            </v-dialog>
          </v-col>
          




          <v-col cols="12" sm="6" md="4">
            <form @submit.prevent="changepassword">
            <v-card :loading="password.loading">
              <template slot="progress">
                <v-progress-linear color="secondary" indeterminate></v-progress-linear>
            </template>
              <v-card-title class="headlinec">
                  Change Password
              </v-card-title>
              <v-list-item>
                <v-list-item-content class="px-4 mt-2">
                  <v-text-field v-model="password.old" outlined color="secondary" :append-icon="password.show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="password.show1 ? 'text' : 'password'" placeholder="Old Password" @click:append="password.show1 = !password.show1" />
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content class="px-4">
                  <v-text-field v-model="password.new" outlined color="secondary" :append-icon="password.show2 ? 'mdi-eye' : 'mdi-eye-off'" :type="password.show2 ? 'text' : 'password'" placeholder="New Password" hide-details @click:append="password.show2 = !password.show2" />
                </v-list-item-content>
              </v-list-item>
              <v-card-actions class="py-5">
                  <v-spacer />
                  <v-btn color="secondary" type="submit" :disabled="password.loading">Change</v-btn>
                  <v-spacer />
              </v-card-actions>

            </v-card>
            </form>
          </v-col>
          


          


          <v-col v-if="!$auth.user.is_company && !$auth.user.is_staff" cols="12" sm="6" md="4">
            <v-card >
              <v-card-title class="headlinec">
                  Awards
              </v-card-title>

              <v-card-text>
                <awards :awards="details.awards" :type="'P'" />
              </v-card-text>

              <v-card-actions class="py-5c">
              </v-card-actions>
            </v-card>
          </v-col>


          


          <v-col v-if="!$auth.user.is_company && !$auth.user.is_staff" cols="12" sm="6" md="4">
            <v-card >
              <v-card-title class="headlinec">
                  Reputations
              </v-card-title>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="ml-5">Upvote Reputation</v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <p style="font-size: 25px;margin-bottom: 0px;">{{details.upvotereputation}}</p>
                </v-list-item-avatar>
              </v-list-item>



              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="ml-5">Verification Reputation</v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <p style="font-size: 25px;margin-bottom: 0px;">{{details.verificationreputation}}</p>
                </v-list-item-avatar>
              </v-list-item>
              

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="ml-5">Likes Reputation</v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <p style="font-size: 25px;margin-bottom: 0px;">{{details.likesreputation}}</p>
                </v-list-item-avatar>
              </v-list-item>
              

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="ml-5">Other Reputation</v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <p style="font-size: 25px;margin-bottom: 0px;">{{details.otherreputation}}</p>
                </v-list-item-avatar>
              </v-list-item>
              

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="ml-5">Referral Reputation</v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <p style="font-size: 25px;margin-bottom: 0px;">{{details.refreputation}}</p>
                </v-list-item-avatar>
              </v-list-item>
              

              

              <v-card-actions class="py-5c">
              </v-card-actions>
            </v-card>
          </v-col>

          

          <v-col v-if="!$auth.user.is_company && !$auth.user.is_staff" cols="12" sm="6" md="4">
            <v-card >
              <v-card-title class="headlinec">
                  Likes
              </v-card-title>


              <v-list-item v-if="details.likes ? details.likes.length < 1 : true">
                <v-list-item-avatar>
                    <v-icon color="error"> mdi-heart </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>No Likes Found </v-list-item-title>
                  <v-list-item-subtitle>You haven't received any likes yet</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <div v-else class="custom-card-body" style="max-height: 300px; overflow-y: scroll">
                <v-list-item v-for="like in details.likes" :key="like.username">
                  <v-list-item-avatar>
                    <img v-if="like.photo" :src="like.photo" :alt="like.name" >
                    <v-icon v-else large> mdi-account-circle </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{like.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{like.username}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <!-- <v-list-item-avatar>
                    5
                  </v-list-item-avatar> -->
                </v-list-item>

              </div>


              <v-card-actions class="py-5c">
              </v-card-actions>
            </v-card>
          </v-col>


        </v-row>
      </v-col>
    </v-row>
  </div>
  
</template>

<script>
import Awards from '~/components/universal/Awards.vue'

export default {
  name: 'UserProfilePage',
  components: { Awards },
    async asyncData({ params, $axios }) {
        // await console.log('hi')
        try {
          const resp = await $axios.get('/app/accounts/profiling')
          // console.log(resp.data)
          if(resp.data.error){
            return {found: false, message: 'User not Found'}
          }
          else{
            return {found: true,details: resp.data}
          }
        }
        catch(e){
          console.log(e)
            return {found: false, message: 'Something went wrong'}
        }
    },
  data() {
    return {
        // found: thi
        details: {
          type: 'Company'
          // name:''
        },
        overview: false,
        linked: false,
        links: {
          facebook: '',
          github: '',
          instagram: '',
          twitter: '',
          website: '',
          linkedin: ''
        },
        password: {
          old: '',
          new: '',
          loading: false,
          show1: false,
          show2: false
        },
        loading: false,
        showbounty: false,
        claim: false,
        funds: {
          name: '',
          ifsc: '',
          mode: 'upi',
          account: '',
          upi: ''
        },
        addfunding: false
    }
  },
  methods: {
      openlinked (){
        this.links = {
          facebook: this.details.facebook || '',
          github: this.details.github || '',
          instagram: this.details.instagram || '',
          twitter: this.details.twitter || '',
          website: this.details.website || '',
        }
        this.linked = true
      },
      async savedetails () {
        try{
          const resp = await this.$axios.post('/app/accounts/profiling',{bio: this.details.bio, name: this.details.name})
          // console.log(resp.data)
          this.details = resp.data
        }
        catch(e){
          console.log(e)
        }
      },
      async changepassword () {
        if(this.password.old.length < 1 || this.password.new.length < 1){
            this.$store.commit('showSnack', { message: 'Please add all parameters properly', type: 'error', timeout: 6000 })
          return 0;
        }
        this.password.loading = true
        try{
          const resp = await this.$axios.post('/app/accounts/changepassword',{old: this.password.old, new: this.password.new})
        //  console.log(resp.data)
          // this.details = resp.data
          if(!resp.data.error){
            this.password = { old: '', new: '', loading: false }
            this.$store.commit('showSnack', { message: resp.data.message, type: 'success', timeout: 6000 })
          }
          else{
            this.password.loading = false
          }
        }
        catch(e){
          console.log(e)
          this.password.loading = false
        }
      },
      async editpropic (e) {
        const formdata = new FormData();
        // formdata.append('photo', e.target.files);
        formdata.append('photo', e.target.files[0], e.target.files[0].name);
        try{
          const resp = await this.$axios.post('/app/accounts/profilepic',
        formdata,
        { headers: {'Content-type': 'multipart/form-data',} })
          // console.log(resp.data)
          if (!resp.data.error){
            this.details = resp.data
          }
        }
        catch(e){
          console.log(e)
        }
      },
      async editlinks (e) {
        this.loading = true
        try{
          const resp = await this.$axios.post('/app/accounts/editlinks',
        this.links)
          // console.log(resp.data)
          this.loading = false
          if (!resp.data.error){
            this.details = resp.data
            this.linked = false
          }
        }
        catch(e){
          console.log(e)
        }
      },
      async deletepro (e) {
        try{
          const resp = await this.$axios.get('/app/accounts/profilepic')
          // console.log(resp.data)
          this.details = resp.data
        }
        catch(e){
          console.log(e)
        }
      },
      get_percentage () {
        let perc = 50
        if (this.details.name){
          if(this.details.name.length > 1){
            perc+=15
          }
        }
        if (this.details.bio){
          if(this.details.bio.length > 5){
            perc+=15
          }
        }
        if (this.details.photo){
          if(this.details.photo.length > 1){
            perc+=20
          }
        }
        return perc
      },
      async claimbountyreal (id) {
        this.loading = true
        try{
          const resp = await this.$axios.get('/app/user/bounty/'+id)
          console.log(resp.data)
          // this.details = resp.data
          this.loading = false
          if(!resp.data.error) {
            this.details = resp.data.details
          }
        }
        catch(e){
          console.log(e)
          this.loading = false
        }
      },
      async addfundaccount (id) {
        this.loading = true
        try{
          const resp = await this.$axios.post('/app/user/addaccount/',this.funds)
          console.log(resp.data)
          // this.details = resp.data
          if(!resp.data.error) {
            this.addfunding = false
            this.details = resp.data.details
          }
          this.loading = false
        }
        catch(e){
          console.log(e)
          this.loading = false
        }
      },
      get_color(S) {
        switch (S) {
          case 'Invalid Bounty':
            return 'error';
          case 'To be Claimed':
            return 'info';
          case 'Requested':
            return 'warning';
          case 'Claimed':
            return 'success';
        
          default:
            return ''
        }
      },
      share(code, type){
        if(window){
          if(type===0){
            // console.log(this.awardobj[i], ' whatsapp sharing')
            // console.log(window.innerWidth)
            window.open(window.innerWidth > 560 ? 'https://web.whatsapp.com/send?text=I+won+a+new+award' : 'https://api.whatsapp.com/send?text=I won a new award')
            // window.open('https://api.whatsapp.com/send?text=I won a new award')
          }
          else if(type===1){
            // console.log(this.awardobj[i], ' gmail sharing');
            window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=New Award&body=I won an Award&ui=2&tf=1&pli=1', 'sharer', 'toolbar=0,status=0,width=648,height=395')
          }
          else if(type===2){
            // console.log(this.awardobj[i], ' twitter sharing');
            window.open('https://twitter.com/intent/tweet?text=I won a new Award&url=https://cyber3ra.com&hashtags=cyber3ra,bugbounty,bountyhunters')
          }
          else{
            // console.log(this.awardobj[i], ' facebook sharing');
            window.open('https://www.facebook.com/sharer/sharer.php?u=https://cyber3ra.com&quote=I won a new Award','facebook-share-dialog','width=626,height=436');
          }
        }
      },
  }
}
</script>
