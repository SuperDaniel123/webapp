<template>
  <div class="news">
      <ul class="newsTeams">
          <h3>Today</h3>
          <li>
              <div class="digest clearfix">
                  <img src="../common/image/portrait.png" />
                  <span class="author">Dow Jones</span>
                  <span class="date">2018.1.1  18:30</span>
              </div>
              <p>
                  China has the largest population in the world. As there are many China-towns in the world, it shows that Chinese people are everywhere, because the traditional idea advocates that the more children, the better for a family.
              </p>
          </li>
          <li>
              <div class="digest clearfix">
                  <img src="../common/image/portrait.png" />
                  <span class="author">Dow Jones</span>
                  <span class="date">2018.1.1  18:30</span>
              </div>
              <p>
                  China has the largest population in the world. As there are many China-towns in the world, it shows that Chinese people are everywhere, because the traditional idea advocates that the more children, the better for a family.
              </p>
          </li>
          <li>
              <div class="digest clearfix">
                  <img src="../common/image/portrait.png" />
                  <span class="author">Dow Jones</span>
                  <span class="date">2018.1.1  18:30</span>
              </div>
              <p>
                  China has the largest population in the world. As there are many China-towns in the world, it shows that Chinese people are everywhere, because the traditional idea advocates that the more children, the better for a family.
              </p>
          </li>
          <li>
              <div class="digest clearfix">
                  <img src="../common/image/portrait.png" />
                  <span class="author">Dow Jones</span>
                  <span class="date">2018.1.1  18:30</span>
              </div>
              <p>
                  China has the largest population in the world. As there are many China-towns in the world, it shows that Chinese people are everywhere, because the traditional idea advocates that the more children, the better for a family.
              </p>
          </li>
          <li>
              <div class="digest clearfix">
                  <img src="../common/image/portrait.png" />
                  <span class="author">Dow Jones</span>
                  <span class="date">2018.1.1  18:30</span>
              </div>
              <p>
                  China has the largest population in the world. As there are many China-towns in the world, it shows that Chinese people are everywhere, because the traditional idea advocates that the more children, the better for a family.
              </p>
          </li>
          <li>
              <div class="digest clearfix">
                  <img src="../common/image/portrait.png" />
                  <span class="author">Dow Jones</span>
                  <span class="date">2018.1.1  18:30</span>
              </div>
              <p>
                  China has the largest population in the world. As there are many China-towns in the world, it shows that Chinese people are everywhere, because the traditional idea advocates that the more children, the better for a family.
              </p>
          </li>

      </ul>
  </div>
</template>

<script>
export default {
  name:"news"
}
</script>
<style lang="less" scoped>
    .newsTeams{
        h3{
            width:100%;
            background: rgb(34, 34, 34);
            line-height: 2rem;
            text-indent: 1rem;
            font-size:1.1rem;
        }
        li{
            padding:1rem;
            background: url("../common/image/arrows-right.png") no-repeat center right;
            background-size:2rem 2rem;
            border-bottom: 1px solid rgb(34,34,34);
            .digest{
                font-size:1rem;
                img{
                    vertical-align: initial;
                    width:1rem;
                    height:1rem;
                }
                span.date{
                    float: right;
                }
            }
            p{
                font-size:1.5rem;
                padding:1rem 2rem 0 0;
                color:#fff;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
            }
            
        }
    }
</style>