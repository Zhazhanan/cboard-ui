<template>
    <!--<aside class="main-sidebar">
        <div class="user-panel clearfix">
            <div class="pull-left image">
                <img src="../assets/user-male-circle-blue-128.png" class="img-circle" alt="User Image">
            </div>
            <div class="pull-left info">
                <p>admin</p>
            </div>
        </div>

        <div class="tip-menu">MENU</div>

        <el-menu
                router
                :collapse="collapse"
                :default-active="$route.path"
                background-color="#222d32"
                text-color="#b8c7ce"
                active-text-color="#fff">

            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>Dashboard</span>
                </template>

                <template v-for="category in categoryList">
                    <el-submenu :index="'/dashboard/'+category.name" :key="category.id">
                        <template slot="title"><i class="el-icon-document"></i>{{ category.name }}</template>
                        <el-menu-item v-for="(board, index) in boardList" v-if="inTheCategory(category.id, board)" :index="'/dashboard/'+category.name+'/'+board.id" :key="board.id">
                            <i class="el-icon-menu"></i>
                            <span slot="title">{{ board.name }}</span>
                        </el-menu-item>
                    </el-submenu>
                </template>
            </el-submenu>

            <el-submenu :index="'/'+menuItem.menuCode" v-for="(menuItem, index) in menuList" :key="menuItem.menuId">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{ $t(menuItem.menuName) }}</span>
                </template>
                <el-menu-item :index="formatRouteByMenuCode(childItem.menuCode)" v-for="childItem in menuItem.children" :key="childItem.menuId">
                    <i class="el-icon-document"></i>
                    <span slot="title">{{$t(childItem.menuName)}}</span>
                </el-menu-item>
            </el-submenu>

        </el-menu>
    </aside>-->
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">

        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">

            <!-- Sidebar user panel (optional) -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p>Alexander Pierce</p>
                    <!-- Status -->
                    <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                </div>
            </div>

            <!-- search form (Optional) -->
            <form action="#" method="get" class="sidebar-form">
                <div class="input-group">
                    <input type="text" name="q" class="form-control" placeholder="Search...">
                    <span class="input-group-btn">
              <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
              </button>
            </span>
                </div>
            </form>
            <!-- /.search form -->

            <!-- Sidebar Menu -->
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header">HEADER</li>
                <!-- Optionally, you can add icons to the links -->
                <li class="active"><a href="#"><i class="fa fa-link"></i> <span>Link</span></a></li>
                <li><a href="#"><i class="fa fa-link"></i> <span>Another Link</span></a></li>
                <li class="treeview">
                    <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span>
                        <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="#">Link in level 2</a></li>
                        <li><a href="#">Link in level 2</a></li>
                    </ul>
                </li>
            </ul>
            <!-- /.sidebar-menu -->
        </section>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
    export default {
        name: "mainSidebar",
        props: {
            collapse: Boolean
        },
        computed: {
            menuList() {
                return this.$store.state.menu.menuList;
            },
            categoryList() {
                return this.$store.state.menu.categoryList;
            },
            boardList() {
                return this.$store.state.menu.boardList;
            }
        },
        data() {
            return {

            };
        },
        methods: {
            hasChildren(category) {
                for(let i=0,l=this.boardList.length; i<l; i++){
                    if(category.id === this.boardList[i].categoryId) return true;
                }
                return false;
            },
            inTheCategory(categoryId, board) {
                return categoryId === board.categoryId;
            },
            formatRouteByMenuCode(menuCode) {
                const menuCodeArr = menuCode.split('.');
                return '/' + menuCodeArr[0] + '/' +menuCodeArr[1];
            }
        }
    }
</script>

<style scoped>

</style>
