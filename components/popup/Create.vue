<template>
  <div class="popup p_create">
    <div class="p_wrap">
      <div class="p_top">
        <h2>새로운상품</h2>
        <button class="btn_close" @click="fnClosePop">닫기</button>
      </div>
      <div class="p_container">
        <div class="p_inner">
          <div class="c_top">
            <div class="tabs1">
              <button class="tab on">상품상세</button>
              <button class="tab">거래/협의내역목록</button>
            </div>
            <div class="btns">
              <button to="" class="btn">저장 후 계속</button>
              <button to="" class="btn">저장</button>
              <button to="" class="btn dark">취소</button>
            </div>
          </div>
          <div class="c_contents">
            <div class="left">
              <ol>
                <li>
                  <label for="name"><b>1.이름</b></label>
                  <InputBox
                    :data="{
                      type: 'text',
                      id: 'name',
                      placeholder: '의료용 로봇 및 의료서비스 로봇 특허',
                    }"
                  />
                </li>
                <li>
                  <label for="name"><b>2.이미지</b></label>
                  <InputBox
                    :data="{ shape: 'file', placeholder: '파일을 선택하세요.' }"
                  />
                  <div class="bx_img">
                    <img src="" class="img" alt="첨부한 이미지" />
                  </div>
                </li>
                <li>
                  <label for="name"><b>3. 상품 설명</b></label>
                  <textarea
                    class="textarea"
                    placeholder="입력해주세요"
                  ></textarea>
                </li>
                <li>
                  <label for="name"><b>4. 등급</b></label>
                  <Select
                    title="선택해주세요."
                    :list="[
                      { name: '선택1' },
                      { name: '선택2' },
                      { name: '선택3' },
                    ]"
                  />
                </li>
                <li>
                  <label for="name"><b>5. 가격</b></label>
                  <InputBox
                    :data="{
                      type: 'text',
                      id: 'name',
                      placeholder: '협의 후 결정',
                    }"
                  />
                </li>
                <li>
                  <label for="name"><b>6. 거래 방식</b></label>
                  <Select
                    title="장기대여 (10년 이상)"
                    :list="[
                      { name: '선택1' },
                      { name: '선택2' },
                      { name: '선택3' },
                    ]"
                  />
                </li>
                <li>
                  <label for="name"><b>7. 거래 조건</b></label>
                  <Select
                    title="분기 1회 납부"
                    :list="[
                      { name: '선택1' },
                      { name: '선택2' },
                      { name: '선택3' },
                    ]"
                  />
                </li>
                <li>
                  <label for="name"><b>8. 지금 조건</b></label>
                  <Select
                    title="현금 지급"
                    :list="[
                      { name: '선택1' },
                      { name: '선택2' },
                      { name: '선택3' },
                    ]"
                  />
                </li>
                <li>
                  <label for="name"><b>9. 라이선스 조건</b></label>
                  <Select
                    title="로열티(월 단위)만 정산"
                    :list="[
                      { name: '선택1' },
                      { name: '선택2' },
                      { name: '선택3' },
                    ]"
                  />
                </li>
              </ol>
            </div>
            <div class="right">
              <ol>
                <li>
                  <label for="name"><b>10. 상품의 형태</b></label>
                  <Select
                    title="단일특허"
                    :list="[
                      { name: '선택1' },
                      { name: '선택2' },
                      { name: '선택3' },
                    ]"
                  />
                </li>
                <li>
                  <div class="colb">
                    <label for="name"><b>11. 상품에 구성된 특허</b></label>
                    <div class="btns_ico">
                      <button class="btn dark">-</button>
                      <button class="btn">+</button>
                    </div>
                  </div>
                  <div class="list_patent">
                    <ItemPatent />
                    <ItemPatent
                      :data="{
                        id: 'KR0555358B1',
                        tit: '동적 번역자원을 이용한 분야 적응형 휴대용 방송자막기계번역 장치 및 방법',
                        disabled: true,
                      }"
                    />
                    <ItemPatent
                      :data="{
                        id: 'KR0837358B1',
                        tit: '동적 번역자원을 이용한 분야 적응형 휴대용 방송자막기계번역 장치 및 방법',
                        disabled: true,
                      }"
                    />
                  </div>
                </li>
                <li>
                  <label for="name"><b>12. 산업분류</b></label>
                  <Select
                    title="1레벨 산업 분류"
                    :list="[
                      { name: '선택1' },
                      { name: '선택2' },
                      { name: '선택3' },
                    ]"
                  />
                  <Select
                    title="2레벨 산업 분류"
                    :list="[
                      { name: '선택1' },
                      { name: '선택2' },
                      { name: '선택3' },
                    ]"
                  />
                </li>
                <li>
                  <label for="name"><b>13. 인기테마</b></label>
                  <Select
                    title="1레벨 인기테마"
                    :list="[
                      { name: '선택1' },
                      { name: '선택2' },
                      { name: '선택3' },
                    ]"
                  />
                  <Select
                    title="2레벨 인기테마"
                    :list="[
                      { name: '선택1' },
                      { name: '선택2' },
                      { name: '선택3' },
                    ]"
                  />
                </li>
                <li>
                  <label for="name"><b>14. 추천 형태</b></label>
                  <Select
                    title="경쟁력, 투자성"
                    :list="[
                      { name: '선택1' },
                      { name: '선택2' },
                      { name: '선택3' },
                    ]"
                  />
                </li>
                <li>
                  <label for="name"><b>15. 시장성 타입</b></label>
                  <Select
                    title="경쟁력, 투자성"
                    :list="[
                      { name: '선택1' },
                      { name: '선택2' },
                      { name: '선택3' },
                    ]"
                  />
                </li>
                <li>
                  <label for="name"><b>16. 메인 노출 여부</b></label>
                  <Select
                    title="경쟁력, 투자성"
                    :list="[{ name: 'Y', select: true }, { name: 'N' }]"
                  />
                </li>
                <li>
                  <label for="name"><b>17. 태그</b></label>
                  <Select
                    title="전기수소차 충전, 그린배터리"
                    :list="[{ name: 'Y', select: true }, { name: 'N' }]"
                  />
                </li>
              </ol>
            </div>
          </div>
          <div class="c_bottom">
            <button to="" class="btn">저장 후 계속</button>
            <button to="" class="btn">저장</button>
            <button to="" class="btn dark">취소</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputBox from "~/components/common/Input";
import ItemPatent from "~/components/common/ItemPatent";
import Select from "~/components/common/Select";
import SelectSearch from "~/components/common/SelectSearch";

export default {
  data() {
    return {};
  },
  components: {
    InputBox,
    ItemPatent,
    Select,
    SelectSearch,
  },
  mounted() {},
  methods: {
    fnClosePop() {
      this.$store.dispatch("ui/setPopCreateState", false);
    },
  },
};
</script>
