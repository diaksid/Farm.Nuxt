<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">Фермерское хозяйство «Храброво»</v-card-title>
        <v-card-text>
          <p>Основополагающей целью создания Фермерского хозяйства <strong>«Храброво»</strong> является желание людей, выросших на Благословенной тульской земле, постараться вернуть веру в Русскую деревню, доказать себе и окружающим, что Русский мужик-есть!!! и он не променяет тяжелый сельский, но благодарный труд работе прислужником (охранником) в столичном магазине.
          </p>
          <p>Так же хочется организовать <b>центр эко-туризма</b>, где городские жители увидят откуда берется молоко, узнают чем отличается сено от соломы и отведают фермерские продукты.
          </p>
          <p>Для реализации поставленных целей мы построим <b>православную церковь</b>, постараемся восстановить фермы, построить гостевые домики и создать дружественную атмосферу.
          </p>
        </v-card-text>
        <hr>
        <v-card-actions>
          <v-btn primary flat nuxt to="/">Отменть</v-btn>
          <v-spacer></v-spacer>
          <v-btn primary flat nuxt to="/contact">Продолжить</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
  export default {
    head: {
      title: 'О нас',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'О фермерском хозяйстве «Храброво».'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: [
            'ферма'
          ].join(',')
        }
      ]
    }
  }
</script>


<style lang="stylus" scoped>
  .flex
    flex-grow: 0
</style>
