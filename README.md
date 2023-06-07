# Terms of Reference

You have received the archive with the sources of our project. You have a bare layout without interactivity. The archive contains everything you need: HTML layout, styles written in LESS preprocessor and converted to plain CSS, all necessary images and fonts (already connected). Note that some elements will need to set display(flex) property to hide/show them.

⚠️ **IMPORTANT** ⚠️:
The final version should be built on any modular structure.
Functionality in all modern browsers (Chrome, Firefox, Opera, IE11, Edge, Safari)

## Welcome! 👋

This project already has a connected slider in the form of a ready-made solution. That's all we were able to do. You do not need to touch it. It was left to keep the styles of the original project and support the mobile version. That is where it works.

## 1. When you click on this button [Вызвать замерщика]:

The modal window (class popup_engineer) should be called
When you click on the cross or backing - disappear.

## 2. When you click on these captions

“Заказать обратный звонок” и “Спросите у нашего специалиста”

The modal window (class popup) should be called
When you click on the cross or backing - disappear.

## 3. Inside all modal windows there is a form

It should be sent via ajax (without reloading the page) and capture all the data entered. It is also necessary to notify the user of the sending status (sending, sent, error). In the field with the phone you can only enter numbers.

## 4. Forms of feedback

There are 6 identical feedback forms on the page.
All of them should be sent via ajax (without reloading the page) and capture all the data entered. It is also necessary to notify the user of the sending status (sending, sent, error). Only numbers can be entered in the field with the phone.

## 5. Tabs must be implemented

It also switches the active tab and its style. (class active)
The user can click on both the inscription and the image

## 6. There are [Рассчитать стоимость] buttons inside all the tabs.

When you click on them, a modal window with the popup_calc class should appear.

The main task: when you click on the small previews (4 in a row above), the preview becomes somewhat larger. Below them, the analog image of the active preview is shown. If you select a different one, there will be a similar logic. In the layout, everything is ready - you just need to prescribe the logic.

In the "width" and "height" fields you can only enter numbers.
When you click on the "Next" button, this modal window is hidden. The popup_calc_profile appears.
On this window realize that you can only select 1 profile. Either cold or warm.
When you click the "Next" button, this modal window is hidden. Popup_calc_end appears.
The requirements here are exactly the same as in the other forms.

BUT! All data that a person has marked or selected must be transmitted with the form.

## 7. Implementation of tabs

It also switches the active tab and its style. (class after_click)

## 10. If the user is on the page for more than 60 seconds

A modal window (popup) should appear.
If you click on the cross or the substrate, the window disappears.

