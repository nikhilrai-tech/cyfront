<template>
    <div class="py-3">
        <div v-for="(string, index) in descouts" :key="index" :class="`string string-${index}`">
            <div v-if="string.charAt(0)=='#'">
                <h1 class="mb-3">
                    <div v-if="string.match(/\[/)">
                        <span v-for="str,ind in string.split(/(?=\[)|\]/g)" :key="ind">
                            <a v-if="str.charAt(0)==='['" target="_blank" :href="str.replace('[','').split(',')[0]">
                                {{str.replace('[','').split(',')[1]}}
                            </a>
                            <span v-else>{{str.replace(/\r?#/g,'')}}</span>
                        </span>
                    </div>
                    <div v-else>
                        {{string.replace(/\r?#/g,'')}}
                    </div>
                </h1>
            </div>
            <div v-else-if="string.charAt(0)=='_' || string.charAt(0)=='-'">
                <v-divider /> 
            </div>
            <img v-else-if="string.charAt(0)==='('" :src="string.replace('(','').replace(')','').split('^')[0]" :alt="string.replace('(','').replace(')','').split('^')[1] || 'Image'" width="150" />
            <div v-else>
                <div v-if="string.match(/\[/)">
                    <span v-for="str,ind in string.split(/(?=\[)|\]/g)" :key="ind">
                        <a v-if="str.charAt(0)==='['" target="_blank" :href="str.replace('[','').split(',')[0]">
                            <!-- <img v-if="str.replace('[','').charAt(0)==`'`" :src="(str.replace(/\[|\'/g,'').split(',')[0])" :alt="str.replace('[','').split(',')[1]"> -->
                            <!-- <span v-else>{{str.replace('[','').split(',')[1]}}</span> -->
                            {{str.replace('[','').split(',')[1]}}
                        </a>
                        <span v-else>{{str}}</span>
                    </span>
                </div>
                <div v-else>
                    {{string}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MarkdownComponent',
    props: {
        text: {type: String, default: ''}
    },
    // computed: {
    //     descouts
    // }
    data() {
        return {
            descouts: this.text.split(/\r?\n/)
        }
    },
    watch: {
        text(newv){
            // console.log(newv.split(/\[(.*?)\]/)) 
            // console.log('New    ',newv.replace(/\[/g,'<a href="').replace(/,/g,'">').replace(/\]/g,'</a>'))
            this.descouts = newv.split(/\r?\n/)
        }
    },
    methods: {
        getlink(val){
            // const val2 = val
            // const val2 = val.replace(/\[(.*?),/g,'<a>')
            // val.replace('/','<a>')
            // console.log('Match : ',val.match(/\r?\[/g))
            // console.log(val.match(/\[(.*?)\]/g)) 
            // const links = val.match(/\[(.*?)\]/g)
            // for (let i=0;i<links.length;i++){
            //     console.log(links[i])
            //     const link = links[i].match(/\[(.*?)\]/)[1].split(',')
            //     val2.replace(/\r?\[/,'<a>')
            //     console.log(val2)
            //     console.log(link)
            // }
            // for(const elm in val.match(/\r?\[/)){
            //     console.log(elm)
            // }
        }
        // content(val) {
        //     console.log(val.charAt(0)==='#')
        //     if(val.charAt(0)==='#'){
        //         if(val.match(/\r?#/g).length ===1){
        //             console.log('matched h1')
        //             console.log(val)
        //             val.replace(/#/g,'<h1>')
        //             console.log(val)
        //             val+='</h1>'
        //         }
        //         else if(val.match(/\r?#/g).length ===2){
        //             val.replace(/\r?#/g,'<h2>')
        //             val+='</h2>'
        //         }
        //         else if(val.match(/\r?#/g).length ===3){
        //             val.replace(/\r?#/g,'<h3>')
        //             val+='</h3>'
        //         }
        //         else {
        //             val.replace(/\r?#/g,'<h3>')
        //             val+='</h3>'
        //         }
        //     }
        //     return val
            
        // }
    }
}
</script>
<style>
.string {
    width: 100%;
    min-height: 20px;
}
</style>