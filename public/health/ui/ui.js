UI = {};

UI.createButton = function(props) {
  if (!isAndroid && props) {
    if (props.image) {
      props.image = props.image.replace(/^\//,'');
    } else if (props.backgroundImage) {
      props.backgroundImage = props.backgroundImage.replace(/^\//,'');
    } else if (props.backgroundSelectedImage) {
      props.backgroundSelectedImage = props.backgroundSelectedImage.replace(/^\//,'');
    }
  }
	return Ti.UI.createButton(safe_merge(CurrentTheme.button, props));
}

UI.createWindow = function(props) {
  if (!isAndroid && props) {
    if (props.backgroundImage) {
      props.backgroundImage = props.backgroundImage.replace(/^\//,'');
    }
  }
	props = safe_merge(CurrentTheme.win, props);
	return Ti.UI.createWindow(props);
}

UI.createLabel = function(props) {
  if (!isAndroid && props) {
    if (props.backgroundImage) {
      props.backgroundImage = props.backgroundImage.replace(/^\//,'');
    } else if (props.backgroundSelectedImage) {
      props.backgroundSelectedImage = props.backgroundSelectedImage.replace(/^\//,'');
    }
  }
	return Ti.UI.createLabel(safe_merge(CurrentTheme.label, props));
}

// remove this once the studio team merges folders
UI.createImageView = function(props) {
  if (!isAndroid && props) {
    if (props.image) {
      props.image = props.image.replace(/^\//,'');
    } else if (props.backgroundImage) {
      props.backgroundImage = props.backgroundImage.replace(/^\//,'');
    } else if (props.backgroundSelectedImage) {
      props.backgroundSelectedImage = props.backgroundSelectedImage.replace(/^\//,'');
    }
  }
	return Ti.UI.createImageView(props);
}

UI.createView = function(props) {
  if (!isAndroid && props) {
    if (props.backgroundImage) {
      props.backgroundImage = props.backgroundImage.replace(/^\//,'');
    } else if (props.backgroundSelectedImage) {
      props.backgroundSelectedImage = props.backgroundSelectedImage.replace(/^\//,'');
    }
  }
	return Ti.UI.createView(props);
}

UI.createTableViewRow = function(props) {
  if (!isAndroid && props) {
    if (props.backgroundImage) {
      props.backgroundImage = props.backgroundImage.replace(/^\//,'');
    } else if (props.backgroundSelectedImage) {
      props.backgroundSelectedImage = props.backgroundSelectedImage.replace(/^\//,'');
    }
  }
	return Ti.UI.createTableViewRow(props);
}
