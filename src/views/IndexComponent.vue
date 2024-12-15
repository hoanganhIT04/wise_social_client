<script setup lang="ts">
import FriendRequestComponent from '@/components/FriendRequestComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import MostFollowerComponent from '@/components/MostFollowerComponent.vue';
import MyFavouriteComponent from '@/components/MyFavouriteComponent.vue';
import SuggestionComponent from '@/components/SuggestionComponent.vue';
import TimelineComponent from '@/components/TimelineComponent.vue';
import UserProfileComponent from '@/components/UserProfileComponent.vue';
</script>

<template>
    <div class="wrapper">
        <!-- Begin header -->
        <HeaderComponent/>
        <!-- End header -->
        <main>
            <div class="main-section">
                <div class="container">
                    <div class="main-section-data">
                        <div class="row">
                            <div class="col-lg-3 col-md-4 pd-left-none no-pd">
                                <div class="main-left-sidebar no-margin">
                                    <!-- Begin User Profile -->
                                    <UserProfileComponent/>
                                    <!-- End User Profile -->
                                     <!-- Begin suggestions -->
                                    <SuggestionComponent/>
                                    <!-- end suggestions-->
                                    <div class="tags-sec full-width">
                                        <div class="cp-sec">
                                            <img src="../assets/images/logo2.png" alt="">
                                            <p>&copy; Copyright 2024.</p>
                                        </div>
                                    </div>
                                    <!--tags-sec end-->
                                </div>
                                <!--main-left-sidebar end-->
                            </div>
                            <!-- begin time line -->
                            <TimelineComponent/>
                            <!-- end time line -->
                            <div class="col-lg-3 pd-right-none no-pd">
                                <div class="right-sidebar">
                                    <!-- begin most follower -->
                                    <MostFollowerComponent/>
                                    <!-- end most follower -->
                                    <!-- Top jobs -->
                                    <!-- begin my favourite -->
                                    <MyFavouriteComponent/>
                                    <!-- end my favourite -->
                                    <!--Request friend People-->
                                    <!-- begin friend request -->
                                    <FriendRequestComponent/>
                                    <!-- end friend request -->
                                </div>
                                <!--right-sidebar end-->
                            </div>
                        </div>
                    </div>
                    <!-- main-section-data end-->
                </div>
            </div>
        </main>
        <!--chatbox-list end-->
    </div>

</template>