<template>
  <div>

    <scroller :on-infinite="infinite" ref="my_scroller">
      <div style="height: 44px;">{{total}}</div>
      <div v-for="(item, index) in items"
           class="row" :class="{'grey-bg': index % 2 == 0}">
        <img v-bind:src="item.images.medium"/>
        {{ item.id }}
        {{ item.title }}
        {{ item.year }}
      </div>
    </scroller>
  </div>
</template>
<script>
  import {get} from '@/service/movieData'
  export default {
    data () {
      return {
        items: [],
        page: 0,
        pageSize: 9,
        total:0,
      }
    },
    mounted() {
    },
    methods: {
      infinite(done) {
        get(this.page, this.pageSize).then(data => {
          this.total = data.total;
          data.subjects.forEach((movie) => {
            this.items.push(movie);
          })
          done()
        })
        this.page = this.page + 9
        if (this.page >= this.total) {
          done(true);return;
        }
      }
    }
  }
</script>
