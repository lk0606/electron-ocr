
import Tesseract from 'tesseract.js'
import React from 'react'
import { Upload, message, Button, Space, Spin} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

let imgBlob = null


const props = {
    name: 'file',
    showUploadList: false,
    accept: '.png, .jpg, .jpeg',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        console.log(info, 'info onchange')
        // if (info.file.status !== 'uploading') {
        //     console.log(info.file, info.fileList);
        // }
        if (info.file.status === 'done') {
            imgBlob = info.file.originFileObj
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

export default function SelfUpload() {
    function toText(e, img = imgBlob) {
        console.log(img, 'img')
        if(!img) {
            message.warning(`请先上传文件`)
            return
        }

        Tesseract.recognize(
            img,
            'eng',
            {
                // logger: m => {
                //     console.log(m)
                // }
            }
        ).then(({ data: { text } }) => {
            imgBlob = null
            console.log(text)
            message.success(`识别成功：详细内容请打开console查看`)
        })
    }


    return <Space>
        <Upload {...props}>
            <Button>
                <UploadOutlined /> Click to Upload
            </Button>
        </Upload>
        <Button type="primary" onClick={toText.bind(this)}>
            开始识别
        </Button>
    </Space>
}
