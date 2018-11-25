package com.etl.service.impl;

import com.etl.service.IFileService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;


/**
 * @author pantao
 * @since 2018/1/29
 */
@Service
public class FileServiceImpl implements IFileService {

    private final static Logger logger = LoggerFactory.getLogger(FileServiceImpl.class);


    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, timeout = 36000, rollbackFor =
            Exception.class)
    public boolean upload(int categoryId, String tag, String description, String prefix, MultipartFile multipartFile) {

        String name = multipartFile.getOriginalFilename();
        String filePath="D:\\";
        try {
            multipartFile.transferTo(new File(filePath + File.separator + name+categoryId));
        } catch (IOException e) {
            e.printStackTrace();
        }

        logger.info("file name ===" + name);
        return false;
    }
}
