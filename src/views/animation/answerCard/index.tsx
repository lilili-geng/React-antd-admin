import { Radio, RadioChangeEvent, Button, Row, Col } from "antd";
import { useState } from "react";


const AnswerCard = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="w-full h-full px-10 pt-4">
      <div className="w-full h-full flex items-center">
        <div className="flex-1 h-full bg-slate-500">1</div>
        <div className="w-1/4 h-full bg-white p-2">
          <div>
            <div className="w-full h-10 bg-slate-300 flex items-center justify-center">选择答题卡模式</div>
            <div className="flex justify-start mt-2">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>网阅卡</Radio>
              </Radio.Group>
            </div>
          </div>

          <div className="mt-2">
            <div className="w-full h-10 bg-slate-300 flex items-center justify-center">选择答题布局</div>
            <div className="flex justify-start mt-2">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>1栏</Radio>
                <Radio value={2}>2栏</Radio>
                <Radio value={3}>3栏</Radio>
              </Radio.Group>
            </div>
            <div className="text-left">一栏建议A4，两栏建议A3，8k纸张</div>
          </div>

          <div className="mt-2">
            <div className="w-full h-10 bg-slate-300 flex items-center justify-center">选择考号板式</div>
            <div className="flex justify-start mt-2">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>准考证号</Radio>
                <Radio value={2}>条形码</Radio>
              </Radio.Group>
            </div>
          </div>

          <div className="mt-2">
            <div className="w-full h-10 bg-slate-300 flex items-center justify-center">添加试题</div>
            <Row className="mt-2" gutter={[16, 16]}>
              <Col span={6} >
                <Button>单选题</Button>
              </Col>
              <Col span={6} >
                <Button>多选题</Button>
              </Col>
              <Col span={6} >
                <Button>填空题</Button>
              </Col>
              <Col span={6} >
                <Button>简答题</Button>
              </Col>
              <Col span={6} >
                <Button>作文</Button>
              </Col>
            </Row>
          </div>

          <div className="mt-2">
            <div className="w-full h-10 bg-slate-300 flex items-center justify-center">显示缺考标记</div>
            <div className="flex justify-start mt-2">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>是</Radio>
                <Radio value={2}>否</Radio>
              </Radio.Group>
            </div>
          </div>

          <div className="mt-2">
            <div className="w-full h-10 bg-slate-300 flex items-center justify-center">添加页脚</div>
            <div className="flex justify-start mt-2">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>显示</Radio>
                <Radio value={2}>不显示</Radio>
              </Radio.Group>
            </div>
          </div>

          <div className="mt-2">
            <div className="w-full h-10 bg-slate-300 flex items-center justify-center">添加试题</div>
            <Row className="mt-2" gutter={[16, 16]}>
              <Col span={6} >
                <Button>保存</Button>
              </Col>
              <Col span={6} >
                <Button>预览</Button>
              </Col>

              <Col span={6} >
                <Button>下载答题卡</Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnswerCard;
