import { useState } from 'react'

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
//import ListItemIcon from '@mui/material/ListItemIcon';
//import StarBorder from '@mui/icons-material/StarBorder';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { categoryList, subCategoryType } from '../../api/connect'


//import styles from '@/styles/Home.module.css'

//商品カテゴリをアコーディオン出力
export default function Nav(){
    return (
        <>
            {
                Object.values(categoryList).map((e) => (
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id={e.id}
                        key={e.id}>
                        <Typography>{e.ja}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        {
                            Object.values(e.child).map((el) => (
                                    <List key={el.id} component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            {/* <ListItemIcon>
                                            <StarBorder />
                                            </ListItemIcon> */}
                                            <ListItemText primary={el.subCategoryJa} />
                                        </ListItemButton>
                                    </List>
                            ))
                        }
                        
                        </AccordionDetails>
                    </Accordion>
                ))
            }
            
        </>
    )
}
