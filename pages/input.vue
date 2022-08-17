<template>
  <section class="container guide">
    <article class="g_bx">
      <div class="col2">
        <div class="g_left">
          <div class="g_cont">
            <h3>check box</h3>
            <p>check box components</p>
            <CheckBox
              :data="{
                title: '<b>아이디기억하기</b>',
                id: '1',
              }"
            />
            <CheckBox
              :data="{
                title: '<b>비활성화</b>',
                id: '2',
                disabled: true,
              }"
            />
            <h3 class="mt20">radio box</h3>
            <p>radio box components</p>
            <RadioBox
              :data="{
                title: '라디오버튼1',
                id: 1,
                name: 'radio',
              }"
            />
            <RadioBox
              :data="{
                title: '라디오버튼2',
                id: 2,
                name: 'radio',
              }"
            />
            <RadioBox
              :data="{
                title: '라디오버튼 비활성화',
                id: 3,
                name: 'radio',
                disabled: true,
              }"
            />
            <h3 class="mt20">select</h3>
            <p>select components</p>
            <Select
              title="선택해주세요."
              :list="[{ name: '선택1' }, { name: '선택2' }, { name: '선택3' }]"
            />
            <Select
              title="비활성화"
              :list="[{ name: '선택1' }, { name: '선택2' }, { name: '선택3' }]"
              classNm="disabled"
            />
            <h3 class="mt20">search select</h3>
            <p>search select components</p>
            <SelectSearch
              title="선택해주세요."
              :list="[{ name: '선택1' }, { name: '선택2' }, { name: '선택3' }]"
              :data="{
                placeholder: '검색어를 입력해 주세요.',
              }"
            />
            <SelectSearch
              :list="[
                { name: '선택1', select: true },
                { name: '선택2' },
                { name: '선택3' },
              ]"
              :data="{
                placeholder: '검색어를 입력해 주세요.',
              }"
              class="disabled"
            />
          </div>
        </div>
        <div class="g_right">
          <div class="g_cont">
            <h3>input</h3>
            <p>input components</p>
            <InputBox
              :data="{ type: 'text', id: 'id', placeholder: '입력해 주세요.' }"
            />
            <Input
              :data="{
                type: 'text',
                placeholder: '입력해주세요',
                width: '150px',
              }"
            />
            <Input
              :data="{ type: 'text', placeholder: '비활성화', disabled: true }"
            />
            <Input
              :data="{
                shape: 'search',
                type: 'text',
                placeholder: '검색어를 입력하세요.',
              }"
            />
            <Input
              :data="{
                shape: 'search',
                type: 'text',
                placeholder: '검색어를 입력하세요.',
                disabled: true,
              }"
            />
            <Input
              :data="{ shape: 'file', placeholder: '파일을 선택하세요.' }"
            />
            <Input
              :data="{
                shape: 'file',
                placeholder: '파일을 선택하세요.',
                disabled: true,
              }"
            />
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import CheckBox from "~/components/common/CheckBox";
import RadioBox from "~/components/common/RadioBox";
import Select from "~/components/common/Select";
import SelectSearch from "~/components/common/SelectSearch";
import Input from "~/components/common/Input";
export default {
  components: {
    CheckBox,
    RadioBox,
    Select,
    SelectSearch,
    Input,
  },
};
</script>

<style></style>
