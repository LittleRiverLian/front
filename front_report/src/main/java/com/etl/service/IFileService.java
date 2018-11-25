package com.etl.service;

import org.springframework.web.multipart.MultipartFile;

/**
 * @author pantao
 * @since 2018/1/29
 */
public interface IFileService {

    /**
     * 上传文件
     *
     * @param categoryId 分类ID
     * @param tag 标签
     * @param description 描述
     * @param prefix 自定义前缀
     * @param multipartFile 文件
     *
     * @return 是否上传成功
     */
    boolean upload(int categoryId, String tag, String description, String prefix, MultipartFile multipartFile);
}
