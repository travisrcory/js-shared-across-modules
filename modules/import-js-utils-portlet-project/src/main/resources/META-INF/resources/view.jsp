<%@ include file="/init.jsp" %>

<p>
	<b><liferay-ui:message key="mymvc.caption"/></b>
</p>

<aui:script require="import-js-utils-portlet-project@1.0.0/js/main.es as main">
    var mainJS = new main.default('<portlet:namespace />');

	mainJS.addNumbers(2, 10);
	mainJS.multiplyNumbers(2, 10);
</aui:script>