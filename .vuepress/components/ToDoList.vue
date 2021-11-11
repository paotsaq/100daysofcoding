<template>
  <table id="to-do">
	<tr v-for="item in items">
	 <td>{{item.description}}</td>
	 <td>{{item.motivation}}</td>
	 <td>{{item.technologies}}</td>
	</tr>
  </table>
</template>

<script>
import data from './../../to_do.json';
export default {
  data () {
      return {
          items: data,
	      };
	},
};
</script>
