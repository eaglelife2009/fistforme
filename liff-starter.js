window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;

    // openWindow call
    document.getElementById('openwindowbutton').addEventListener('click', function () {
        liff.openWindow({
            url: 'https://line.me'
        });
    });

    // closeWindow call
    document.getElementById('closewindowbutton').addEventListener('click', function () {
        liff.closeWindow();
    });

    // sendMessages call
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        liff.sendMessages([{
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "carousel",
    "contents": [
      {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "NEWS DIGEST",
              "size": "sm",
              "weight": "bold",
              "color": "#AAAAAA"
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_4_news.png",
          "size": "full",
          "aspectRatio": "20:13",
          "aspectMode": "cover",
          "action": {
            "type": "uri",
            "label": "Action",
            "uri": "https://linecorp.com/"
          }
        },
        "body": {
          "type": "box",
          "layout": "horizontal",
          "spacing": "md",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "flex": 1,
              "contents": [
                {
                  "type": "image",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/02_1_news_thumbnail_1.png",
                  "gravity": "bottom",
                  "size": "sm",
                  "aspectRatio": "4:3",
                  "aspectMode": "cover"
                },
                {
                  "type": "image",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/02_1_news_thumbnail_2.png",
                  "margin": "md",
                  "size": "sm",
                  "aspectRatio": "4:3",
                  "aspectMode": "cover"
                }
              ]
            },
            {
              "type": "box",
              "layout": "vertical",
              "flex": 2,
              "contents": [
                {
                  "type": "text",
                  "text": "7 Things to Know for Today",
                  "flex": 1,
                  "size": "xs",
                  "gravity": "top"
                },
                {
                  "type": "separator"
                },
                {
                  "type": "text",
                  "text": "Hay fever goes wild",
                  "flex": 2,
                  "size": "xs",
                  "gravity": "center"
                },
                {
                  "type": "separator"
                },
                {
                  "type": "text",
                  "text": "LINE Pay Begins Barcode Payment Service",
                  "flex": 2,
                  "size": "xs",
                  "gravity": "center"
                },
                {
                  "type": "separator"
                },
                {
                  "type": "text",
                  "text": "LINE Adds LINE Wallet",
                  "flex": 1,
                  "size": "xs",
                  "gravity": "bottom"
                }
              ]
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "More",
                "uri": "https://linecorp.com"
              }
            }
          ]
        }
      },
      {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "NEWS DIGEST",
              "size": "sm",
              "weight": "bold",
              "color": "#AAAAAA"
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_4_news.png",
          "size": "full",
          "aspectRatio": "20:13",
          "aspectMode": "cover",
          "action": {
            "type": "uri",
            "label": "Action",
            "uri": "https://linecorp.com/"
          }
        },
        "body": {
          "type": "box",
          "layout": "horizontal",
          "spacing": "md",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "flex": 1,
              "contents": [
                {
                  "type": "image",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/02_1_news_thumbnail_1.png",
                  "gravity": "bottom",
                  "size": "sm",
                  "aspectRatio": "4:3",
                  "aspectMode": "cover"
                },
                {
                  "type": "image",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/02_1_news_thumbnail_2.png",
                  "margin": "md",
                  "size": "sm",
                  "aspectRatio": "4:3",
                  "aspectMode": "cover"
                }
              ]
            },
            {
              "type": "box",
              "layout": "vertical",
              "flex": 2,
              "contents": [
                {
                  "type": "text",
                  "text": "7 Things to Know for Today",
                  "flex": 1,
                  "size": "xs",
                  "gravity": "top"
                },
                {
                  "type": "separator"
                },
                {
                  "type": "text",
                  "text": "Hay fever goes wild",
                  "flex": 2,
                  "size": "xs",
                  "gravity": "center"
                },
                {
                  "type": "separator"
                },
                {
                  "type": "text",
                  "text": "LINE Pay Begins Barcode Payment Service",
                  "flex": 2,
                  "size": "xs",
                  "gravity": "center"
                },
                {
                  "type": "separator"
                },
                {
                  "type": "text",
                  "text": "LINE Adds LINE Wallet",
                  "flex": 1,
                  "size": "xs",
                  "gravity": "bottom"
                }
              ]
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "More",
                "uri": "https://linecorp.com"
              }
            }
          ]
        }
      }
    ]
  }
} 
, {
            type: 'sticker',
            packageId: '2',
            stickerId: '144'
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });

    // get access token
    document.getElementById('getaccesstoken').addEventListener('click', function () {
        const accessToken = liff.getAccessToken();
        document.getElementById('accesstokenfield').textContent = accessToken;
        toggleAccessToken();
    });

    // get profile call
    document.getElementById('getprofilebutton').addEventListener('click', function () {
        liff.getProfile().then(function (profile) {
            document.getElementById('useridprofilefield').textContent = profile.userId;
            document.getElementById('displaynamefield').textContent = profile.displayName;

            const profilePictureDiv = document.getElementById('profilepicturediv');
            if (profilePictureDiv.firstElementChild) {
                profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
            }
            const img = document.createElement('img');
            img.src = profile.pictureUrl;
            img.alt = "Profile Picture";
            profilePictureDiv.appendChild(img);

            document.getElementById('statusmessagefield').textContent = profile.statusMessage;
            toggleProfileData();
        }).catch(function (error) {
            window.alert("Error getting profile: " + error);
        });
    });
}

function toggleAccessToken() {
    toggleElement('accesstokendata');
}

function toggleProfileData() {
    toggleElement('profileinfo');
}

function toggleElement(elementId) {
    const elem = document.getElementById(elementId);
    if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}
