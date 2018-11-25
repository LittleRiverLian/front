package com.etl.controller;


import com.etl.service.IFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;


/**
 * @author pantao
 * @since 2018/1/29
 */
@Controller
@RequestMapping(value = "file")
public class FileController {
    @Autowired
    public IFileService fileService;

    @RequestMapping(value = "", method = RequestMethod.POST)
    public String upload(int categoryId, String tag, String description, String prefix, @RequestParam("file")
            MultipartFile multipartFile) {

        fileService.upload(categoryId, tag, description, prefix, multipartFile);

        return "success";
    }

}
