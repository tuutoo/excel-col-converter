<script setup lang="ts">
import { NButton, NCollapse, NCollapseItem, NForm, NFormItem, NInput, NSpace } from 'naive-ui'

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

const onlyAllowString = (value: string) => !value || /^[a-zA-Z]+$/.test(value)
const onlyAllowNumber = (value: string) => !value || /^\d+$/.test(value)
</script>

<template>
  <NCollapse :default-expanded-names="activeKey">
    <NCollapseItem title="Convert Column Name to Number" name="1">
      <NForm class="text-center">
        <NFormItem>
          <template #label>
            <BoldLabel>Excel Column Name</BoldLabel>
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
            <BoldLabel>Converted Number</BoldLabel>
          </template>
          <NInput :value="convertedColumnNumber" placeholder="" disabled text-center />
        </NFormItem>
      </NForm>
    </NCollapseItem>
    <NCollapseItem title="Convert Number to Column Name" name="2">
      <NForm class="text-center">
        <NFormItem>
          <template #label>
            <BoldLabel>Excel Column Number</BoldLabel>
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
            <BoldLabel>Converted Name</BoldLabel>
          </template>
          <NInput :value="convertedColumnName" placeholder="" disabled text-center />
        </NFormItem>
      </NForm>
    </NCollapseItem>
    <NCollapseItem title="Multiple Excel Column Name Converter" name="3">
      <div>
        To convert back and forth correctly, column name
        should &lt;= ZZZZZZ and column number should &lt;= 321272406
      </div>
      <div class="flex-col items-center md:flex md:flex-row justify-between">
        <div>
          <span class="font-bold">Excel Column Names</span>
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
              Convert to Numbers =&gt;
            </NButton>
            <NButton type="primary" @click="multiColumnNames = multiNumbersToNames(multiColumnNumbers)">
              &lt;= Convert to Names
            </NButton>
          </NSpace>
        </div>
        <div>
          <span class="font-bold">Excel Column Numbers</span>
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
.uppercase :deep(.n-input__input-el),.uppercase :deep(.n-input__textarea-el) {
  text-transform: uppercase;
}
</style>
