<template>
  <div>
    <Header/>
    <section>
      <div class="ydc-content-slide ydc-body">
        <div class="ydc-flex">
          <!-- left begin -->
          <div class="ydc-column ydc-column-2">
            <Menu/>
          </div>
          <!-- left end -->
          <!-- right begin -->
          <div class="ydc-column ydc-column-8">
            <router-view/>
          </div>
          <!-- right end -->
        </div>
      </div>
      <Footer/>
    </section>
  </div>
</template>

<script>
import Header from '@/components/header'
import Menu from '@/components/menu'
import Footer from '@/components/footer'

export default {
  name: 'App',
  components: { Header, Menu, Footer }
}
</script>

<style>
.ydc-content-slide {
    position: relative;
    width: 1180px;
    margin: 20px auto;
    -webkit-transform: translate3d(0,30px,0);
    transform: translate3d(0,30px,0);
    -webkit-transition: opacity .5s,-webkit-transform .5s;
    transition: opacity .5s,-webkit-transform .5s;
    transition: transform .5s,opacity .5s;
    transition: transform .5s,opacity .5s,-webkit-transform .5s;
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

.ydc-column-2 {
    -ms-flex: 0 0 20.83333%;
    -webkit-flex: 0 0 20.83333%;
    flex: 0 0 20.83333%;
    max-width: 20.83333%
}

.ydc-column-8 {
    -ms-flex: 0 0 79.16667%;
    -webkit-flex: 0 0 79.16667%;
    flex: 0 0 79.16667%;
    max-width: 79.16667%
}
</style>
