﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kandidaty_na_rabotu_v_organizaciyu
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотруд.
    /// </summary>
    // *** Start programmer edit section *** (Сотруд CustomAttributes)

    // *** End programmer edit section *** (Сотруд CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудE", new string[0])]
    [View("СотрудL", new string[0])]
    public class Сотруд : ICSSoft.STORMNET.DataObject
    {
        
        // *** Start programmer edit section *** (Сотруд CustomMembers)

        // *** End programmer edit section *** (Сотруд CustomMembers)

        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудE", typeof(IIS.Kandidaty_na_rabotu_v_organizaciyu.Сотруд));
                }
            }
            
            /// <summary>
            /// "СотрудL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудL", typeof(IIS.Kandidaty_na_rabotu_v_organizaciyu.Сотруд));
                }
            }
        }
    }
}
