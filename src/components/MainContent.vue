<script setup lang="ts">
import { typesafeI18n } from '@/i18n/i18n-vue'
import { NButton, NCollapse, NCollapseItem, NForm, NFormItem, NInput, NSpace } from 'naive-ui'

const { LL } = typesafeI18n()

const activeKey = ref(['1', '2', '3'])

const singleColumnName = ref('')
const singleColumnNumber = ref(null)
const multiColumnNames = ref('')
const multiColumnNumbers = ref('')

const convertedColumnNumber = computed(() => {
  return ColumnNameToNumber(singleColumnName.value).toString()
})

const convertedColumnName = computed(() => {
  return ColumnNumberToString(singleColumnNumber.value)
})

const onlyAllowString = (value: string) => !value || /^[a-z]+$/i.test(value)
const onlyAllowNumber = (value: string) => !value || /^\d+$/.test(value)
</script>

<template>
  <NCollapse :default-expanded-names="activeKey">
    <NCollapseItem :title="LL.nameToNumber()" name="1">
      <NForm class="text-center">
        <NFormItem>
          <template #label>
            <BoldLabel>{{ LL.excelColumnName() }}</BoldLabel>
          </template>
          <NInput
            v-model:value="singleColumnName"
            :allow-input="onlyAllowString"
            placeholder="A ~ ZZZZZZ"
            class="uppercase" clearable maxlength="6" text-center
          >
            <template #prefix>
              <i-ri-edit-2-line />
            </template>
          </NInput>
        </NFormItem>
        <NFormItem>
          <template #label>
            <BoldLabel>{{ LL.convertedNumber() }}</BoldLabel>
          </template>
          <NInput :value="convertedColumnNumber" placeholder="" disabled text-center />
        </NFormItem>
      </NForm>
    </NCollapseItem>
    <NCollapseItem :title="LL.numberToName()" name="2">
      <NForm class="text-center">
        <NFormItem>
          <template #label>
            <BoldLabel>{{ LL.excelColumnNumber() }}</BoldLabel>
          </template>
          <NInput
            v-model:value="singleColumnNumber"
            :allow-input="onlyAllowNumber"
            placeholder="1 ~ 321272406"
            clearable maxlength="9" text-center
          >
            <template #prefix>
              <i-ri-edit-2-line />
            </template>
          </NInput>
        </NFormItem>
        <NFormItem>
          <template #label>
            <BoldLabel>{{ LL.convertedName() }}</BoldLabel>
          </template>
          <NInput :value="convertedColumnName" placeholder="" disabled text-center />
        </NFormItem>
      </NForm>
    </NCollapseItem>
    <NCollapseItem :title="LL.multiNameConverter()" name="3">
      <div>{{ LL.excelBatchConvertDesc() }}</div>
      <div class="flex-col items-center md:flex md:flex-row justify-between">
        <div>
          <span class="font-bold">{{ LL.excelColumnName() }}</span>
          <NInput
            v-model:value="multiColumnNames"
            placeholder=""
            type="textarea"
            class="uppercase"
            clearable
            rows="8"
          />
        </div>
        <div p-4 text-center>
          <NSpace vertical justify="center" size="large">
            <NButton type="primary" @click="multiColumnNumbers = multiNamesToNumbers(multiColumnNames)">
              {{ LL.convertNameToNum() }}
            </NButton>
            <NButton type="primary" @click="multiColumnNames = multiNumbersToNames(multiColumnNumbers)">
              {{ LL.convertNumToName() }}
            </NButton>
          </NSpace>
        </div>
        <div>
          <span class="font-bold">{{ LL.excelColumnNumber() }}</span>
          <NInput
            v-model:value="multiColumnNumbers"
            placeholder=""
            type="textarea"
            clearable
            rows="8"
          />
        </div>
      </div>
    </NCollapseItem>
  </NCollapse>
</template>

<style scoped>
.uppercase :deep(.n-input__input-el),
.uppercase :deep(.n-input__textarea-el) {
  text-transform: uppercase;
}
</style>
