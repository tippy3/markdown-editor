<template>
  <div class="editor m-5">
    <h1>tippy's markdown editor</h1>
    <p><span> {{ user.displayName }}としてログイン中</span>
    <button class="btn btn-secondary" @click="logout">ログアウト</button></p>
    <div>
      <div class="memoListWrapper m-2">
        <ul class="list-group mb-1">
          <li class="memoList list-group-item" v-for="(memo, index) in memos" @click="selectMemo(index)" :data-selected="index == selectedIndex">
            <span class="memoTitle">{{ displayTitle(memo.markdown) }}</span>
          </li>
        </ul>
        <button class="addMemoBtn btn btn-primary" @click="addMemo">メモを追加</button>
        <button class="deleteMemoBtn btn btn-danger" @click="deleteMemo" v-if="memos.length > 1">選択中のメモを削除</button>
        <button class="saveMemosBtn btn btn-success" @click="saveMemos">保存(Ctrl+s)</button>
      </div>
      <hr>
      <div class="editorWrapper m-2">
        <textarea class="markdown" v-model="memos[selectedIndex].markdown"></textarea>
        <div class="preview" v-html="preview()"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import marked from "marked";
  export default {
    name: "editor",
    props : ["user"],
    data(){
      return {
        memos:[
          { markdown: "さあ、書き始めよう" }
        ],
        selectedIndex: 0
      };
    },
    created: function(){
      firebase.database().ref('memos/'+this.user.uid)
      .once('value').then(result =>{
        if (result.val()){
          this.memos = result.val();
        }
      });
    },
    mounted: function(){
      document.onkeydown = e =>{
        if(e.key == "s" && (e.metaKey || e.ctrlKey)){
          this.saveMemos();
          return false;
        }
      };
    },
    beforeDestroy: function(){
      document.onkeydown = null;
    },
    methods: {
      logout: function(){
        firebase.auth().signOut();
      },
      addMemo: function(){
        this.memos.unshift({ markdown: "無題のメモ" });
        this.selectedIndex = 0;
      },
      deleteMemo: function(){
        this.memos.splice(this.selectedIndex,1);
        if(this.selectedIndex>0){
          this.selectedIndex--;
        }
      },
      saveMemos: function(){
        firebase.database().ref('memos/'+this.user.uid).set(this.memos);
      },
      selectMemo: function(index){
        this.selectedIndex = index;
      },
      preview: function(){
        return marked(this.memos[this.selectedIndex].markdown);
      },
      displayTitle: function(text){
        return text.split(/\n/)[0];
      }
    }
  };
</script>
<style lang="scss" scoped>
  .editorWrapper{
    display: flex;
  }
  .markdown{
    width: 50%;
    height: 500px;
  }
  .preview{
    width: 50%;
    text-align: left;
  }
  .memoList{
    &[data-selected='true']{
      background-color: #ccf;
    }
  }
</style>
